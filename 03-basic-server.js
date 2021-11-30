const fs = require('fs');
const express = require('express');

const app = express();

async function read() {
    await fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) {
            res.send(err);
            return;
        }

        res.send(data);
    });
}

app.get('/', (req, res) => {
    console.log('some request');
    read();
});

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
});

console.log('End of the script');