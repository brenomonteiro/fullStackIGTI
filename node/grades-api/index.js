var express = require("express");
var fs = require('fs').promises;
var app = express();
var accountsRouter = require('./routes/grades.js')
global.fileName = 'grades.json';

app.use(express.json());
app.use('/grades', accountsRouter);

app.listen(3000, async () => {
    try {

        await fs.readFile(global.fileName, 'utf8');
        console.log("API START")
    } catch (err) {
        const initialJson = {
            nextId: 1,
            accounts: []

        };
        fs.writeFile(global.fileName, JSON.stringify(initialJson)).catch(err => {
            console.log(err)
        });

    }

})