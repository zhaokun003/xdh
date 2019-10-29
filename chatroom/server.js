//通过express来托管网站
var io = require('socket.io');
var express = require('express');
var app = express();
var server = app.listen(3000);
var ws = io.listen(server);

//将所有用户名存储
var username = {};

// Socket.IO 全双工实时通讯广播
ws.on("connection", function (socket) {

    // 把接收到的信息 原样广播到客户端
    socket.on("join", function (obj) {
        username[obj.split('进')[0]] = socket.id;
        ws.sockets.emit("text", obj);
        //服务器 打印用户名
        console.log(username);
    });

    //监听发送消息
    socket.on("measure", function (obj) {
        ws.sockets.emit("text", obj);
    });

    socket.on("prevate", function (obj) {
        //判断对方的id在不在
        if (username[obj.target] == undefined) {

            ws.sockets.connected[username[obj.name]].emit("text", "该用户不存在");
        } else {
            ws.sockets.connected[username[obj.name]].emit("text", obj.name + ":" + obj.msg);
            ws.sockets.connected[username[obj.to]].emit("text", obj.name + ":" + obj.msg);
        }
    });

    // 断开连接时，通知其它用户
    socket.on('disconnect', function () {
        //遍历用户名，k => v
        for (var i in username) {
            if (username[i] == socket.id) {
                leave = i;
                ws.sockets.emit('text', leave + '离开了聊天室!');
            }
        }

    })
});

