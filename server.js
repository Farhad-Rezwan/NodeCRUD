const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/connection')

dotEnv.config();


const app = express();

// Mongo Database connection
dbConnection()

// CORS Implementation
app.use(cors());

// payload middleware 
app.use(express.json);
app.use(express.urlencoded({extended: true})); /* request content type: "application/json"*/

// PORT defination
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});

// // middleware: error handling
// app.use(function (err, req, res, next) {
//     console.error(err.stack)
//     res.status(500).send({
//         status: 500,
//         message: err.message,
//         body: {}
//     });
// });