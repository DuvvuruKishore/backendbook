require("dotenv").config();
const express = require("express");
var cors = require('cors');

const connectDB = require("./config/db.js");
const userRoutes =require('./routes/users.js');



const app = express();
app.use(cors())

app.use(express.json());

app.use('/user',userRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
