const express = require('express');
const app = express();


app.post('/:number',(req,res)=>{
    let number = req.params.number;
    let palindron = 0;
    while(number != 2){
        palindron = number * (number -1);
        number--;
    }

    res.json({palindron})
})

app.get('/',(req,res)=>{
    res.send("Yes it is working");
})

app.listen(process.env.PORT || 9000,()=>{console.log("server started")})