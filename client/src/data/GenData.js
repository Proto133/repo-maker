const GEN_DATA = {
    html: (projectTitle, css, js) => {
        let cssTag
        let jsTag
        css ? cssTag = `<link rel="stylesheet" type="text/css" href="./assets/css/style.css">` : cssTag = null
        js ? jsTag = `<script defer type="text/javascript" src="./assets/js/script.js"></script>` : jsTag = null
        return (`
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        ${jsTag}
                        ${cssTag}
                        <title>${projectTitle}</title>
                    </head>
                    <body>
    
                    </body>
                    </html>
                    `)
    },
    model: {
        mongoose: (name, properties) => {
            let schemaProps = properties?.map((prop) => {
                if (prop.type !== 'Schema.Types.ObjectId') {
                    return (`
                        ${prop.name}:{
                            type: ${prop.type},
                        },
                    `)
                } else {
                    return (`
                        ${prop.name}:{
                            type: ${prop.type},
                            ref: '${prop.ref}'
                        },
                    `)
                }
            })
            return (`
            const { Schema, model } = require('mongoose');
            
            const ${name.toLowerCase()}Schema = new Schema({
                ${schemaProps}
            })
            
            const ${name} = model('${name}', ${name.toLowerCase()}Schema)
            module.exports = ${name}
            `)
        },

        mysql: ({name, schema, options}) => {
            
            return(`
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
            
const ${name} = sequelize.define('${name.toLowerCase()}', {
    ${schema.properties?.map((prop) => {
        let propOptions = prop.options?.map((option) => {
            return (`${option.name} : ${option.value},`)
        })
        return (`
        ${prop.name}: {
            type: DataTypes.${prop.type}, ${!propOptions ? '' :`
            ${propOptions}` }
        }`)
    })}                
},{
    sequelize,
    timestamps: ${options?.timestamps},
    freezeTableName: ${options?.freeze},
    underscored: ${options?.underscored},
    modelName: '${name.toLowerCase()}',
})

                
module.exports = ${name};
                `)
            }
        }
}


module.exports = GEN_DATA