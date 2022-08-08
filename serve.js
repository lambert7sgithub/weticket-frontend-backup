const http = require('http');
const path = require('path');
const express = require('express');

let serve;
const app = express();
app.use(express.static(path.join(__dirname, './build')));

serve = new http.createServer(app);

serve.on('error', err => console.log('Server error:', err));
serve.listen(process.env.PORT);