const fs = require('fs');
const path = require('path');

const repoData = require('./repo-data.js'); //Replace with finished  
const EventEmitter = require('events');
const emitter = new EventEmitter();
// require('./prototypes')

const { name, content } = repoData
let max
const repoRoot = path.join(__dirname, name)

const findMax = () => {
    let levelsArray = []
    content.map((item) => {
        levelsArray.push(item.level)
    })
    max_level = Math.max(...levelsArray)
    console.log('max_level:', max_level)
    return max_level
}

const nextLevel = (level) => {
    writeLevel(level)
}

const checkLevel = (level) => {
    if (level <= max) {
        nextLevel(level)
        return true
    }
    return false
}

const writeLevel = (level) => {
    console.log(`writeLevel Start: ${level}`)
    let data = ''
    content.map((item) => {
        console.log(item.self)
        if (item.parent === 'root') {
            if (item.self.type === 'dir') {
                fs.mkdir(`${repoRoot}/${item.self.name}`, (err) => {
                    if (err) throw err
                })
                console.log(`Succesfully wrote /${item.self.name} directory`)
            } else if (item.self.type === 'file') {
                fs.writeFile(path.join(repoRoot, item.self.name), data, (err) => {
                    if (err) throw err
                })
                console.log(`Succesfully wrote /${item.self.name} file`)
            }

        } else {
            if (item.self.type === 'dir') {
                fs.mkdir(`${repoRoot}/${item.parent}/${item.self.name}`, (err) => {
                        if (err) throw err
                    })
                    // console.log('dir:\n' + path.join(repoRoot, item.parent, item.self.name))
            } else if (item.self.type === 'file') {
                let filePath = path.join(repoRoot, item.parent, item.self.name)
                fs.writeFile(filePath, data, (err) => {
                        if (err) throw err
                    })
                    // console.log(`Succesfully wrote $ {item.parent/${item.self.name} file`)
                    // console.log('file:\n' + path.join(repoRoot, item.parent, item.self.name))
            }
        }
    })

    emitter.on('wave done', () => {
        console.log('emitter hit')
        let next_level = level + 1
        console.log({ next_level })
        checkLevel(next_level)
    })
    emitter.emit('wave done', console.log(`Wave ${level} done`))
}


const initMakeRepo = () => {

    let initLevel = 1
    fs.mkdirSync(repoRoot, (err) => {
        if (err) throw err
    })
    writeLevel(initLevel)
    return max = findMax()
}

module.exports = initMakeRepo