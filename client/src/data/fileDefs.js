const fileDefs = {
    scriptJS: {
        level: 3,
        parent: `assets/js`,
        self: {
            type: 'file',
            name: 'script.js',
            data: `//This is a the autogenerated script from RepoMaker`
        }
    },
    assetsDir:{
        level: 1,
        parent: 'root',
        self:{
            type: 'dir',
            name: 'assets',
        }
    },
    assetsCSS:{
            level: 2,
            parent: '/assets',
            self: {
                type: 'dir',
                name: 'css'
            }
        },
        assetsJS:{
            level: 2,
            parent: '/assets',
            self: {
                type: 'dir',
                name: 'js'
            }
        },
    styleCSS: {
        level: 3,
        parent: `assets/css`,
        self: {
            type: 'file',
            name: 'styles.css',
            data: `/* This is a stylesheet from RepoMaker */`
        }
    },
    indexHTML: {
        level: 1,
        parent: 'root',
        self: {
            type: 'file',
            name: 'index.html',
            data: `<!-- Placeholder-->`
        }
    }
}

export default fileDefs