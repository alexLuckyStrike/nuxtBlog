let express = require('express');
let app = express();

app.get("/server",(req,res) => {

  res.send('<h1>Давайте сделаем запрос на сервер</h1>')

})

module.exports = {
  path:'/api',
  handler:app
}

