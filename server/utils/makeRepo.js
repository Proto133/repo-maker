const fs = require('fs');
const path = require('path');
// ! repoData will be the information passed from frontend.
// const repoData = require('./repo-data.js'); 
const fileData = require('./FileData')
const EventEmitter = require('events');
const emitter = new EventEmitter();

// * TESTING DATA
const content = [{
        level: 1,
        parent: 'root',
        self: {
            type: 'dir',
            name: 'RepoMaker'
        }
    }, {
        level: 1,
        parent: 'root',
        self: {
            type: 'dir',
            name: 'server'
        }
    }, {
        level: 1,
        parent: 'root',
        self: {
            type: 'dir',
            name: 'client'
        }
    }, {
        level: 1,
        parent: 'root',
        self: {
            type: 'file',
            name: '.gitignore'
        }
    }, {
        level: 1,
        parent: 'root',
        self: {
            type: 'file',
            name: 'repo-maker structure.md'
        }
    }, {
        level: 2,
        parent: '/RepoMaker',
        self: {
            type: 'file',
            name: 'repoMap.md'
        }
    }, {
        level: 2,
        parent: '/server',
        self: {
            type: 'dir',
            name: 'config'
        }
    }, {
        level: 2,
        parent: '/server',
        self: {
            type: 'dir',
            name: 'models'
        }
    }, {
        level: 2,
        parent: '/server',
        self: {
            type: 'dir',
            name: 'routes'
        }
    }, {
        level: 2,
        parent: '/server',
        self: {
            type: 'dir',
            name: 'seeds'
        }
    }, {
        level: 2,
        parent: '/server',
        self: {
            type: 'dir',
            name: 'utils'
        }
    },
    {
        level: 2,
        parent: '/server',
        self: {
            type: 'file',
            name: 'server.js'
        }
    }, {
        level: 3,
        parent: 'server/config',
        self: {
            type: 'file',
            name: 'connection.js'
        }
    }, {
        level: 3,
        parent: 'server/models',
        self: {
            type: 'file',
            name: 'index.js'
        }
    }, {
        level: 3,
        parent: 'server/models',
        self: {
            type: 'file',
            name: 'Users.js'
        }
    }, {
        level: 3,
        parent: 'server/models',
        self: {
            type: 'file',
            name: 'Notes.js'
        }
    }, {
        level: 3,
        parent: 'server/models',
        self: {
            type: 'file',
            name: 'Items.js'
        }
    }, {
        level: 3,
        parent: 'server/models',
        self: {
            type: 'file',
            name: 'Library.js'
        }
    }, {
        level: 3,
        parent: 'server/routes',
        self: {
            type: 'dir',
            name: 'api'
        }
    }, {
        level: 3,
        parent: 'server/routes',
        self: {
            type: 'file',
            name: 'viewRoutes.js'
        }
    }, {
        level: 3,
        parent: 'server/routes',
        self: {
            type: 'file',
            name: 'index.js'
        }
    }, {
        level: 3,
        parent: 'server/seeds',
        self: {
            type: 'file',
            name: 'seedData.json'
        }
    }, {
        level: 3,
        parent: 'server/seeds',
        self: {
            type: 'file',
            name: 'seed.js'
        }
    }, {
        level: 4,
        parent: 'server/routes/api',
        self: {
            type: 'file',
            name: 'userRoutes.js'
        }
    }, {
        level: 4,
        parent: 'server/routes/api',
        self: {
            type: 'file',
            name: 'messageRoutes.js'
        }
    }, {
        level: 3,
        parent: 'server/utils',
        self: {
            type: 'file',
            name: 'helper.js'
        }
    }
]
async function makeRepo(repoData) {
    // Destructure repoData
    const {name} = repoData


    let level
    // Since nested levels change based on the type of repo, 
    // declare 'max' as global variable to to be set in initMakeRepo function.

    // Build Project Root in desired directory.
    const repoRoot = path.join(__dirname, `../PRODUCT/${name}`)

    // Find Max Level of nested directories to iterate through.
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
        console.log('NEXT LEVEL FIRED:', level)
        writeLevel(level)
    }

    const checkLevel = async (level) => {
        let max = await findMax()
        console.log(`Check Level Fired: ${level}`)
        console.log(`MAX: ${max}`)
        console.log(`level is <= max:`, level <= max)
        if (level <= max) {
            nextLevel(level)
            return true
        }
        return false
    }

    const writeLevel = async (level) => {
        if (!checkLevel) {
            console.log('Complete')
            return
        }
        console.log(`writeLevel Start: ${level}`)
        let data = ''
        let wave = content.map((item) => {
            if (item.level === level) {
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
            }
            return 
        })
        emitter.on('wave done', () => {
            console.log('emitter hit')
            let next_level = level + 1
            console.log({
                next_level
            })
            checkLevel(next_level)
        })

        return emitter.emit('wave done', console.log(`Wave ${level} done`))
    }


    const initMakeRepo = () => {

        let initLevel = 1
        fs.mkdirSync(repoRoot, (err) => {
            if (err) throw err
        })
        writeLevel(initLevel)
        return max = findMax()
    }
   await initMakeRepo()
}

makeRepo(content)
module.exports = makeRepo