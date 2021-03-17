const express = require('express');
const dotEnv = require('dotenv');

dotEnv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    res.send('Hello from NodeCRUD api server')
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})