const express = require('express');
const app = express();
const format = require('date-format')
const PORT = 4000 || process.env.PORT;


let dateNow = format.asString("[dd-mm-yy]", new Date());

app.get("/", (req, res)=>{
    res.status(200).send("<h1>saroz savar</h1>")
});

app.get("/api/v1/instagram", (req, res)=>{
    const instaSocial = {
        username: "saroz_savar811",
        followers: 58,
        follows: 70,
        date: format.asString("[dd-mm-yy]", new Date()),
    }
    res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res)=>{
    const FBSocial = {
        username: "saroj sabar",
        followers: 545,
        follows: 113,
        date: dateNow,
    }
    res.status(200).json(FBSocial);
});


app.get("/api/v1/linkedin", (req, res)=>{
    const LinkedinSocial = {
        username: "saroj sabar",
        followers: 40,
        follows: 10,
        date: dateNow,
    }
    res.status(200).json(LinkedinSocial);
});

app.get("/api/v1/:id", (req, res)=>{
    console.log(req.params.id)
    res.status(200).json({list: req.params.id})
})

app.listen(PORT, ()=>{
    console.log(`server is running in port${PORT}`)
})
