const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is bhavani project'));

app.listen(port);"fuck this fuckers"
console.log(`App running on http://localhost:${port}`);
