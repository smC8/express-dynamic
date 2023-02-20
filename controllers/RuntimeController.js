module.exports= {
    init : init
};

function init(app){
    console.log('here we go')
    app.get('/api/myruntimeroute1', function(req,res) {
        console.log("req")
        res.send({"runtime" : "route1"});
    })
    app.get('/api/myruntimeroute2', function(req,res) {
        console.log("req")
        res.send({"runtime" : "route2"});
    })
    app.get('/api/myruntimeroute3', function(req,res) {
        console.log("req")
        res.send({"runtime" : "route3"});
    })
}