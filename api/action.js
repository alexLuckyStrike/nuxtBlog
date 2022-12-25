let express = require('express');
let app = express();


app.get("/action", function(req,res){

  res.send(

    '<h1 style="color: red">Добро пожаловать отсюда</h1>',

    );

})


module.exports = {
  path:'/api',
  handler:app
}
