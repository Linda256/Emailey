const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
	res.send('Good Afternoon, Linda')
});

app.listen(PORT,()=>console.log(`Server is running at port ${PORT}`))