const GEN_DATA = require('./GenData')
const fs = require('fs')
const path = require('path')

let mysqlData = GEN_DATA.model.mysql({
    name: 'Content',
    schema: {
        properties: [{
            name: 'id',
            type: 'INTEGER',
            options: [{
                name: 'PK',
                value: true
            },{
                name: 'AutoIncrement',
                value: true
            },{
                name: 'hidden Option C',
                value: "'FuckOFF'"
            }]
        }, {
            name: 'userId',
            type: 'INTEGER',
            options: []
        }, {
            name: 'trashId',
            type: 'INTEGER',
            options: []
        }, {
            name: 'inLandfill',
            type: 'BOOLEAN',
            options: [{
                name: 'defaultValue',
                value: false
            }]
        }]
    },
    options: {
        timestamps: true,
        freeze: true,
        underscored: true
    }
})

function Start() {
    console.log(path.join(__dirname, 'mysqlTEST.js'))
    fs.writeFileSync(path.join(__dirname, '../../dev/mysqlTEST.js'), mysqlData)
}
Start()