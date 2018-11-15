const express = require('express');
require('./services/passport');


const app = express();

// app.get('/',(req,res)=>{
// 	res.send('Happy Fall Linda! Have a good day')
// });
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server is running at port ${PORT}`))