const express = require("express");
const path = require("path")
const cors = require('cors');
const app = express();
router = require("./routes/index.routes");

app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from React
}));
app.use(router);
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

app.listen(5000, (req, res) =>{
    console.log("Server is running on port 5000");
});