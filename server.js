// var express = require('express');
// var app = express();
// var fs = require('fs');
// var server = require('http').Server(app);
// var io = require('socket.io')(server);

// app.use(express.static("."));

// app.get("/", function (req, res) {
//     res.redirect("index.html");
// });

// app.get("/statistics", function (req, res) {
//     res.redirect("statistics.html");
// });

// server.listen(3000);

// io.on('connection', function (socket) {
//     socket.on("send statistics", function (statistics) {
//         fs.appendFileSync("statistics.json", JSON.stringify(statistics) + "\n");
//     })
// });


// io.on('connection', function (socket) {
//     socket.on("send st", function (statistics) {
//         socket.emit("send stats",statistics);

//     })
// });

var fs = require('fs');  //ֆայլերի մեջ գրել և կարդալու համար
var express = require('express'); //սերվեր
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var statData = []; //ստատիստիկան պահպանող օբյեկտների զանգվածը

//եթե ֆայլը կա
if (fs.existsSync("public/statistics.json")) {
    //կարդում ենք ֆայլից և անմիջապես դարձնում օբյեկտ 
    var statData = require(".public/statistics.json");
    
}

//սահմանում ենք, ստատիկ ֆայլերի դիրեկտորիան
app.use(express.static("public"));
//սահմանում ենք կլիենտին անհրաժեշտ javascript-ների դիրեկտորիաները, տես index.html-ում
app.use('/socket', express.static(__dirname + '/node_modules/socket.io-client/dist/'));
app.use('/p5', express.static(__dirname + '/node_modules/p5/lib/'));

//արմատի շավիղը (rout-ը)
app.get('/', function (req, res) {
    res.redirect('index.html');
});
//ստատիստիկայի շավիղը
app.get('/stats', function (req, res) {
    res.redirect('statistics.html');
});

server.listen(3000);

io.on('connection', function (socket) {
    socket.on("send data", function (data) {
        statData.push(data); //ավելացնում ենք նոր տվյալը զանգվածում

        fs.appendFileSync('public/statistics.json', JSON.stringify(statData)); //գրում ենք ստատսիտկայի տվյալները ֆայլի մեջ

    })


    socket.on("get stats", function () { //երբ կլիենտը ուղարկում է "get stats" 
        //կարդում ենք ստատիստիկայի ֆայլը
        fs.readFile('public/statistics.json', "utf8", function (err, statisticsFromFile) {
            //և ուղարկում ենք այն "send stats" պիտակով
            socket.emit("send stats", statisticsFromFile);
        });

    })


});



