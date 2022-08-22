const express = require("express") 
const path = require("path")
const app = express();


app.get("/api", function(req,res) {
  const options = {
    root: path.join(__dirname, "../public"),
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 's-max-age=1, stale-while-revalidate'
    }
  }
 
  res.sendFile("index.html", options)

})

app.use(express.static("public"))

module.exports = app;
