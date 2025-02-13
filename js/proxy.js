const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/proxy', (req, res) => {
    fetch(req.query.url)
        .then(response => response.text())
        .then(data => res.send(data));
});

app.listen(3000);