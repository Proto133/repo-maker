const writeRepo = require('./writeRepo')
async function writeDirWithFile(){
   let parentDirectory = await writeRepo.dir('./server/PRODUCT/Testing_Methods2/', 'Directory1')
console.log(parentDirectory)
// writeRepo.file(`${parentDirectory}/file1.txt`, 'This is a file')
}

// writeDirWithFile()