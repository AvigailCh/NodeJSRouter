const express = require('express');

const cakeRouter = require('./routes/cakesRouter');

const app = express();


app.use('/cakes/', cakeRouter);



app.get('/cookies')

app.listen(5000, ()=>{
    console.log('app is listening on port 5000')
})