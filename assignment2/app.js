const express = require('express');
const app = express();

app.use((req,res,next) => {
    console.log('Middleware One');
    next();
});

app.use((req,res,next) => {
     console.log('Middleware Two');
    res.send('express js middleware');
});

app.listen(4000);