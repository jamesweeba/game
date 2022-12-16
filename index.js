
const express = require("express");
const path = require("path")

const app = express();

console.log(__dirname);

app.use(express.static('public'));

app.get("/", (req, res) => {
    return res.sendFile( path.join(__dirname,'index.html'));
    // return res.sendFile(path.join(__dirname,'client/build','index.html'));
})






app.listen(1600,()=>{
    console.log("magic happens on port ")
})


