const express = require("express");
const path = require("path")
const app = express();

app.use(express.static(path.join(__dirname, 'client/dist')))

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

app.listen(5000, (req, res) =>{
    console.log("Server is running on port 3000");
});