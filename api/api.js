let express = require("express");
let app = express();

app.get("/api",function(req,res){

  res.send(req.method);

});


module.exports = {
  path:'/api/',
  handler:app
}

