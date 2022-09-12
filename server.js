const express = require('express');
const cors = require('cors');
const app = express();

const dotenv = require('dotenv')
dotenv.config()

require('./server/config/mongoose.config'); 
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

require('./server/routes/player.routes')(app);

app.listen(process.env.PORT, () => {
    console.log(`Listening at Port ${process.env.PORT}`)
})

