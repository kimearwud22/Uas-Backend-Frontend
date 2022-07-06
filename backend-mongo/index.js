const express = require('express')
const app = express()
const port = 5000
const routerInventaris = require('./routers/inventarisRoute')
const mongoose = require('mongoose')
const CORS = require('cors')


require('dotenv').config();

//untuk menerima req.body
app.use(express.json())
app.use(CORS(
    {
        origin: '*'
    }));
app.use(express.urlencoded({ extended: true })) 


mongoose.connect(process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Database Conneected");
});



app.get('/',(req,res)=>{
    res.send('About')
})

app.use(routerInventaris)

app.listen(port, ()=>{
    console.log('server berjalan pada port ' + port)
})