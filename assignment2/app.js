const express = require('express');
const app = express();

// app.use((req,res,next) => {
//     console.log('Middleware One');
//     next();
// });

// app.use((req,res,next) => {
//      console.log('Middleware Two');
//     res.send('express js middleware');
// });
app.use('/user',(req,res,next) => {
    console.info('user page middleware');
    res.send('<p>This middleware handles userpage /user </p>')
});

app.use('/',(req,res,next) => {
    console.warn('home page middleware');
    res.send('<div>This middleware handles homepage /</div>')
});



app.listen(4000);