let express = require('express');
let app = express();

app.get("/status",(req,res) => {

  res.send('<h1>На странице содержится информация о статусе</h1>')

})


module.exports = {
  path:'/api',
  handler:app
}
