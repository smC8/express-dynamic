var express = require('express');
var app = express();

// development time route
app.get("/", function(req,res){
    res.send("ok!!")
});
app.get('/api/hello', function(request,response) {
    console.log('hello')
     return response.status(200).send({"hello":"world"})
});

// static file handling
app.use(express.static(__dirname + '/client/app'));

// hook to initialize the dynamic route at runtime
app.use('/api/dynamic/:RuntimeController', function(req,res) {
    console.log ('entering dynamic module')
    var dynamicController = require('./controllers/'+req.params.RuntimeController);
    console.log('loaded dynamic module===>', (dynamicController))
    //console.log('instantiating dynamic module with app instance===>', (app))
    dynamicController.init(app);
    //console.log('result of dynamic module invocation with app instance===>', (res))
    res.status(200).send({"route":"added"});
});

app.listen(2222, (()=> console.log("yoohoo")));