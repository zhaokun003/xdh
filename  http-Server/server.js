var net = require('net');
var fs = require('fs');

var server = net.createServer((sock) => {

    sock.on('data', (data) => {
        //先把data转成字符串
        var data = data.toString();
        //再得到str 是个 数组 【“get”,"/","http\1.1"】
        var arr = data.split("\r\n")[0].split(" ");
        //先声明文件名
        var str = '';
        //声明cookie里面的值
        var coo = '';

        if (arr[1] == "/") {
            //进入首页
            sock.write('HTTP/1.1 200 OK\n');
            sock.write('Content-type:text/html;charset=UTF-8\n\n');
            sock.write('<h1>welcome</h1><a href="http://localhost:8001/admin">进入管理后台</a>');
            // console.log(str);
            sock.end();

        } else if (arr[1] == "/admin") {
            //进入admin
            if (arr[0] == "GET") {
                //如果存在cookie
                if (data.split("Cookie:")[1]) {
                    //cookie中存在 name 值，并且和文件对应，则取出文件里面的内容显示在浏览器中
                    //取出cookie里面的值
                    coo = data.split("Cookie:")[1].split("name=")[1].split(";")[0].split('\r\n')[0];
                    console.log('cookie值为:' + coo);
                    console.log(data);
                    //如果存在文件，名字是cookie开头的,把文件里面的内容打印出来
                    if (fs.existsSync(coo + '.txt')) {
                        fs.readFile(coo + '.txt', (err, add) => {
                            if (err) throw err;
                            sock.write('HTTP/1.1 200 OK\n');
                            sock.write('Content-type:text/html;charset=UTF-8\n\n');
                            sock.write(add);
                            sock.end();
                        });
                    } else {
                        //不存在文件，就跳转login
                        sock.write('HTTP/1.1 302 \n');
                        sock.write('Location:http://localhost:8001/login\n');
                        sock.end();
                    }

                } else {
                    //cookie不存在，则直接跳转到 login
                    sock.write('HTTP/1.1 302 \n');
                    sock.write('Location:http://localhost:8001/login\n');
                    sock.end();
                }


            } else if (arr[0] == "POST") {
                //接收表单值
                //按照2个空行来切割，获取到 username 和 password
                var arr2 = data.split("\r\n\r\n")[1];
                if (arr2 == "username=admin&password=123456") {

                    //生成随机数作为文件名
                    for (var i = 0; i < 10; i++) {
                        id = parseInt(Math.random() * 10);
                        str += id;
                    }

                    //写入文件 把字符串作为文件名，将username的值写入该文件中
                    fs.writeFile(str + '.txt', arr2, 'utf8', function (error) {
                        if (error) {
                            console.log(error);
                            return false;
                        }
                        console.log('username已成功写入文件中！');

                        //设置cookie 
                        //在浏览器cookie中放入刚生成的随机字符串，并让浏览器重定向到/admin
                        sock.write('HTTP/1.1 302 \n');
                        sock.write(`Set-Cookie:name=${str}\n`);
                        sock.write('Location:http://localhost:8001/admin\n');
                        sock.end();
                    })

                } else {
                    sock.write('HTTP/1.1 302 \n');
                    sock.write('Location:http://localhost:8001/login\n');
                    sock.end();
                }
            }
        } else if (arr[1] == "/login") {
            //进入login
            sock.write('HTTP/1.1 200 OK\n');
            sock.write('Content-type:text/html;charset=UTF-8\n\n');
            //填写表单
            sock.write('<form action="http://localhost:8001/admin" method="POST">');
            sock.write('<div> username: <input type="text" name="username"></div>');
            sock.write('<div> password: <input type="text" name="password"></div>');
            sock.write('<button type="submit">提交</button>');
            sock.write('</form>');
            sock.end();
        };

    });

});

server.on('error', (err) => {
    throw err;
});

server.listen(8001, 'localhost');


