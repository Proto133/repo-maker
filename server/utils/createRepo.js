const path = require('path')
const fs = require('fs')

const genDirs = async(repoPath, folders) => {
    console.log(`GENPATH: ${repoPath}`)
    await folders.map(folder => {
        if (folder.nested) {
            console.log('Trying to create', path.join(repoPath, folder.nested))
            fs.mkdir(path.join(repoPath, folder.nested), (err) => {
                if (err) {
                    console.log(err.message);
                }
            })
        }
        //! SEPARATE THESE TWO FUNCTION
        if (folder.files) {
            console.log('Line17:', typeof(folder.files))
            if (typeof(folder.files) == 'array') {
                folder.files.forEach(file => console.log('line `9:', path.join(repoPath, folders.nested, file)))
            } else {
                fs.writeFile(path.join(repoPath, folder.nested), `/${folder.files}`, (err) => {
                    if (err) {
                        console.log(err.message);
                    }
                })
            }
        }


    })
}
const genFiles = (repoPath, files) => {
    files.forEach(file => fs.writeFile(repoPath, file))
}
const makeDbFolders = async(root, models) => {
    let l2folders = [{ nested: 'config', files: 'connection.js' }, { nested: 'models', files: models }, { nested: 'utils', files: 'helpers.js' }]
    await genDirs(root, l2folders)

}

const clientSide = async(root, frontend, api) => {
    console.log(`clientSide Info: \n root: ${root} \n frontend: ${frontend} \n api:${api}`)
    let l2folders = [{ dir: 'assets', files: '' }]
    await genDirs(root, l2folders)

}

const serverSide = (root, database, api) => {
    console.log(`serverSide Info: \n root:${root} \n database: ${database} \n api: ${api}`)
    database ? makeDbFolders(root, database.models) : console.log('No DB, Moving On.')

}
const createRepo = (info) => {
    const { name, kind, databaseTech, apiType, frontend } = info;
    const repoRoot = path.join(__dirname, `../PRODUCT/${name}`)
    fs.mkdir(repoRoot, (err) => {
        if (err) {
            console.log(err.message);
        }
    })
    console.log('Directory created successfully!')
    if (kind === 'client-side') {
        clientSide(repoRoot, frontend, apiType)
    }
    if (kind === 'server-side') {
        serverSide(repoRoot, databaseTech, apiType)
    }

}

module.exports = createRepo;