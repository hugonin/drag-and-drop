const express = require("express") 
const app = express()

app.use(express.static("website"))

const PORT = process.env.PORT || 8000
app.listen(PORT)
console.log(`Server running on port ${PORT}`)