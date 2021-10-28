// Test Repo Info
let repoInfo = {
    name: 'TESTAPP',
    kind: 'FullStack',
    db: {
        type: 'MongoDB',
        models: ['users', 'items', 'notes', 'library']
    },
    api: 'GaphQL',
    frontend: 'React',
    content: [{
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
        },
         {
            level: 2,
            parent: '/server',
            self: {
                type: 'file',
                name: 'package.json'
            }
        },
         {
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
}

module.exports = repoInfo