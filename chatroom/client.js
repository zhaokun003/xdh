//readline（逐行读取）
var readline = require('readline');
var socket = require('socket.io-client')('http://localhost:3000');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


var name;
var count = 1;
console.log(`请输入用户名:`);
rl.on('line', function (answer) {
    //count是行数，当行数=1时，把当前输入当作为用户名；行数=2则表示输入都为语句，不作为用户名
    if (count == 1) {
        name = answer;
        socket.emit("join", name + "进入房间");
        count = 2;
    } else {
        //正则匹配 @ 
        var reg = /^@/;
        if (reg.test(answer)) {
            //@某人
            //按空格切割字符串
            var msgarr = answer.split(' ');
            //target是要 @ 的对象的用户名
            var target = msgarr[0].substring(1);
            var msg = '';
            for (var i = 1; i < msgarr.length; i++) {
                msg += msgarr[i];
                if (i < msgarr.length - 1) {
                    msg += ' ';
                }
            }
            var arr = { name, target, msg }
            socket.emit("prevate", arr);
        } else {
            //打印普通语句
            socket.emit("measure", name + ":" + answer);

        }
    }
});

socket.on("text", function (obj) {
    if (count == 2) {
        console.log(obj);
    }
});







