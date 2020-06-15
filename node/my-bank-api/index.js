var express = require("express");
var fs = require('fs').promises;
var app = express();
var accountsRouter = require('./routes/accounts.js')
global.fileName = 'accounts.json';
const winston = require("winston");
app.use(express.json());
app.use('/account', accountsRouter);



/*app.listen(2000, function () {
    try {
        /*fs.readFile(global.fileName, 'utf8', (err, data) => {
            
            if(err){
                const initialJson = {
                    nextId: 1,
                    accounts:[]

                };
                fs.writeFile(global.fileName, JSON.stringify(initialJson),err => {
                    if(err){
                        console.log('erro:'+err);
                    }
                    
                });
            }
            
        });
        fs.readFile(global.fileName, 'utf8').catch(() => {
            const initialJson = {
                nextId: 1,
                accounts:[]

            };
            fs.writeFile(global.fileName, JSON.stringify(initialJson)).catch(err =>{
                console.log(err)
            });
        }).catch(err => {
            console.log(err)
        })
    } catch (err) {
        console.log('ctch'+err);
    }
    console.log("API START")
})*/


app.listen(2000, async () => {
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