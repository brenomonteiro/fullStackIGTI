var express = require("express");
var router = express.Router();
var fs = require('fs').promises;


router.post("/", async (req, res) => {
    let grade = req.body;
    try {
        let data = await fs.readFile(global.fileName, 'utf8')
        let json = JSON.parse(data);
        var d = new Date();
        //console.log(JSON.stringify(json))
        grade.timestamp = d.toISOString();
        grade = {
            id: json.nextId++, ...grade
        };
        json.grades.push(grade);

        fs.writeFile(global.fileName, JSON.stringify(json));
        res.end();

    } catch (err) {
        res.status(400).send({ error: err.message });

    }





});

router.get('/', async (req, res) => {

    try {
        let data = await fs.readFile(global.fileName, 'utf8');
        let json = JSON.parse(data);
        delete json.nextId;
        res.send(json);

    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});


router.get('/:id', async (req, res) => {

    try {
        let data = await fs.readFile(global.fileName, 'utf8');
        let json = JSON.parse(data);
        const account = json.grades.find(account => account.id === parseInt(req.params.id, 10));
        if (account) {
            res.send(account);
        } else {
            res.end();
        }
    } catch (err) {
        res.status(400).send({ error: err.message });

    }

});

router.delete('/:id', async (req, res) => {
    let data = await fs.readFile(global.fileName, 'utf8');
    try {
        let json = JSON.parse(data);
        let accounts = json.grades.filter(account => account.id !== parseInt(req.params.id, 10));
        json.accounts = accounts;
        await fs.writeFile(global.fileName, JSON.stringify(json));
        res.end();

    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});


router.put("/", async (req, res) => {
    let newGrade = req.body;
    try {
        let data = await fs.readFile(global.fileName, 'utf8');
        let json = JSON.parse(data);
        let oldIndex = json.grades.findIndex(grade => grade.id === newGrade.id)
        //student, subject, type e value.
        json.grades[oldIndex].subject = newGrade.subject;
        json.grades[oldIndex].type = newGrade.type;
        json.grades[oldIndex].value = newGrade.value;

        await fs.writeFile(global.fileName, JSON.stringify(json));
        res.end();
    } catch (err) {
        res.status(400).send({ error: err.message });
    }

});

router.post("/media", async (req, res) => {
    let params = req.body;
    //console.log(req.params.s+'ola')
    try {
        let data = await fs.readFile(global.fileName, 'utf8');
        let json = JSON.parse(data);
       
        
        let filtro = json.grades.filter(grade => 
            grade.type === params.type && grade.subject === params.subject
        );
      
      
        let soma = filtro.reduce((accumulator,current)=>{

            return accumulator + current.value;
        },0)
        let media = soma/filtro.length
        console.log(soma/filtro.length)
        res.send(media.toString());
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

router.post("/maior", async (req, res) => {
    let params = req.body;
    //console.log(req.params.s+'ola')
    try {
        let data = await fs.readFile(global.fileName, 'utf8');
        let json = JSON.parse(data);
       
        
        let filtro = json.grades.filter(grade => 
            grade.type === params.type && grade.subject === params.subject
        ).sort((a,b) => {
            return a.value - b.value
        });
      
    
      
        console.log(filtro)
        res.send(filtro);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

module.exports = router;