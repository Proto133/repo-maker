const path = require('path')
const fs = require('fs');

const writeRepo = {
    file:({filePath, data}) =>{
        fs.writeFile(filePath, data, (err) => {
            if (err) throw err
        })
    },
    dir:({dirPath,name}) => {
        let parentDir = path.join(dirPath, name)
        fs.mkdir(parentDir, {recursive: true}, (err) => {
            if (err) throw err
        })
    }
}
module.exports = writeRepo;