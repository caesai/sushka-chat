'use strict';
var express = require('express');
var path = require('path');
var proxy = require('proxy-middleware');
// var proxy = require('express-http-proxy');
var socket = require('socket.io-client');
var url = require('url');

var app = express();

var port = process.env.PORT || 3000;

var io = require('socket.io').listen(app.listen(port, function(){
    console.log('Server is listening on port: ' + port);
}));

var users = [];

io.on('connection', function(socket){
    socket.on('user:join', function(userInfo) {
        socket.user = userInfo.name;
        var userJoined = {
                name: userInfo.name,
                avatar: userInfo.avatar
        };
        
        users.push(userJoined);

        io.emit('user:join', userJoined);
        console.log(userInfo.name + ' has joined');
    });

    socket.on('disconnect',function(){
        for(var i=0; i<users.length; i++) {
            if(users[i].name == socket.user) {
                console.log(socket.user + ' has left');
                users.splice(users.indexOf(users[i]), 1);
            }
        }
        io.emit('user:left', users);
    });

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
        console.log(msg.user + ': ' + msg.msg);
    });

    socket.on('user:writing', function(userName) {
        io.emit('user:writing', userName);
    });
});


// app.use('/assets', proxy('/', {
//     forwardPath: function (req, res) {
//         // console.log(require('url').parse(req.url).path);
//         return  require('url').parse(req.url).path;
//     }
// }));


app.use('/assets', proxy('http://sushkazzlo.ru/', {
    forwardPath: function (req, res) {
        return require('url').parse(req.url).path;
    }
}));

app.use('/fonts', proxy('http://sushkazzlo.ru/', {
    forwardPath: function (req, res) {
        return require('url').parse(req.url).path;
    }
}));

app.use('/img', proxy('http://sushkazzlo.ru/', {
    forwardPath: function (req, res) {
        return require('url').parse(req.url).path;
    }
}));

// app.use('/img', proxy('http://sushkazzlo.ru/img', {
//     forwardPath: function (req, res) {
//         return 'http://sushkazzlo.ru/img' + req.url
//     }
// }));
// app.use('/fonts', proxy(url.parse('http://sushkazzlo.ru/fonts')));
// app.use('/img', proxy(url.parse('http://sushkazzlo.ru/img')));
//
app.use(function logErrors(err, req, res, next) {
        console.error(err.stack);
        next(err);
    }
);

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(express.static('./assets'));
app.use(express.static('./fonts'));
app.use(express.static('./img'));
