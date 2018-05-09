const express = require('express')
const app = express()
const proxy = require('express-http-proxy');

app.get('/', (req, res) => res.sendFile('./index.html', {root: __dirname}))
app.get('/index-amp', (req, res) => res.sendFile('./index.amp.html', {root: __dirname}))
app.use('/index_files', express.static('index_files'));
app.use('/assets', express.static('assets'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
