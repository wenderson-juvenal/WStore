const express = require("express")
const app = express()
const PORT = 3000

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.get("/", (req, res) => {
    res.render("index")
})

app.listen(PORT, (() => {
    console.log("Server running...")
}))