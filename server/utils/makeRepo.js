const fs = require('fs');
const path = require('path');
const writeRepo = require('./writeRepo')
// const fileData = require('./FileData')
const testData = require('../dev/testData.js');

const makeRepo = async (RepoInfo) => {
    const {content} = RepoInfo //Destructure content from data
    const repoRoot = path.join(__dirname, '../PRODUCT', RepoInfo.name);
    console.log(repoRoot);

    //Create Project Root Directory
    // const makeProjectRoot = () => {
        //check if project folder already exists
        if (fs.existsSync(repoRoot)) {
            console.log(path.basename(repoRoot), 'already exists.');
        } else {
            fs.mkdir(repoRoot, err => {
                if (err) throw err;
            })
        }
    // }

    //Find amount of nested levels found in project.
    const findMax = () => {
        let levelsArray = []
        content?.map((item) => {
            levelsArray.push(item.level)
        })
        maxLvl = Math.max(...levelsArray)
        return maxLvl
    }
    const max_level = await findMax()
    // console.log('max_level:', max_level)

    
    
    // const makeDirs = () => {
        content?.map(item => {
            let ext = path.extname(item.self.name)
            let comment 
            if(ext === '.js' || ext === '.json'){ comment = '//'} 
            else {comment = '##'}
            if (item.parent === 'root') { 
                item.parent = './'}

            if(item.self.type === 'dir'){
                writeRepo.dir({dirPath: path.join(repoRoot, item.parent),name: item.self.name})
            }

            if (item.self.type === 'file' && fs.existsSync(path.join(repoRoot, item.parent))){
    
                writeRepo.file({filePath: path.join(repoRoot, item.parent, item.self.name), data: item.self.data? item.self.data :`${comment} This is code for the ${item.self.name} file`})
            }
        })
    // }
    
    
}











// makeRepo(testData)
module.exports = makeRepo