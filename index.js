const app = require("./api/server")


const PORT = process.env.PORT || 8000
app.listen(PORT)
console.log(`Server running on port ${PORT}`)