const express= require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.query(`DELETE FROM people`)
connection.query(`INSERT INTO people(name) value('Silvio Santos')`)
connection.query(`INSERT INTO people(name) value('Bolsonaro')`)
connection.query(`INSERT INTO people(name) value('Lula')`)
connection.query(`INSERT INTO people(name) value('Dilma')`)

var response = '<h1>Full Cycle</h1>\n'
connection.query("SELECT name FROM people", function(err, result, fields) {
    for (var index in result)  {
        response = response + '<li>' + result[index].name + '</li>'
    }
}); 

app.get('/', (req,res) => {
    res.send(response)   
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})