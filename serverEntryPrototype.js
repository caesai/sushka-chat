'use strict';
var express = require('express');
var path = require('path');
var proxy = require('proxy-middleware');
var socket = require('socket.io-client');
let multiparty = require('multiparty');
let fs = require('fs');
var url = require('url');
var Busboy = require('busboy');
var app = express();
var busboy = require('connect-busboy')({
  immediate: true,
    limits: {
        fileSize: 10 * 1024 * 1024
    }
});

var port = process.env.PORT || 3000;

var io = require('socket.io').listen(app.listen(port, function(){
    console.log('Server is listening on port: ' + port);
}));

let currentUserName;

io.on('connection', function(socket){
    socket.on('user:join', function(userInfo) {
        currentUserName = userInfo.name;
        io.emit('user:join', userInfo);
        console.log(currentUserName + ' has joined');
    });


    socket.on('disconnect',function(){
        // for(var i=0; i<users.length; i++) {
        //     if(users[i].name == socket.user) {
                console.log(currentUserName + ' has left');
        //         users.splice(users.indexOf(users[i]), 1);
        //     }
        // }
        io.emit('user:left', currentUserName);
    });

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
        console.log(msg.user + ': ' + msg.msg);
    });
    //
    // socket.on('user:writing', function(userName) {
    //     var writingMsg = userName + ' writing...';
    //     io.emit('user:writing', userName);
    // });
});

app.post('/upload', busboy, function(req, res) {
    console.log("admin refresh");
    // req.pipe(req.busboy);

    var fstream;
    // var busboy = new Busboy({headers: req.headers})
    if (req.busboy) {
        console.log(req.headers['content-type']);
        req.on('data', function(d) { console.log('Saw ' + d.length + ' request bytes') })
        req.busboy.on('file', function (fieldname, file, filename) {
            console.log("Uploading: " + filename);

            //Path where image will be uploaded
            fstream = fs.createWriteStream(__dirname + '/upload/' + filename);
            file.pipe(fstream);
            fstream.on('close', function () {
                console.log("Upload Finished of " + filename);
                res.redirect('back');           //where to go next
            });
        });
        req.pipe(req.busboy);
    }
    res.sendStatus(200);
});

app.use('/assets', proxy(url.parse('http://localhost:8081/assets')));
app.use('/upload', proxy(url.parse('http://localhost:8081/upload')));
app.use('/fonts', proxy(url.parse('http://localhost:8081/fonts')));
app.use('/img', proxy(url.parse('http://localhost:8081/img')));

app.use(function logErrors(err, req, res, next) {
        console.error(err.stack);
        next(err);
    }
);

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});
