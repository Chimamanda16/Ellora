const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
const cors = require('cors');
const app = express();
router = require("./routes/index.routes");

app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(cors());
app.use(router);
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

mongoose.connect(process.env.MONGO).then(() =>{
    app.listen(process.env.PORT, (req, res) =>{
        console.log("Server is running on port 5000");
    });
})
