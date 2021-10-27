const GEN_INDEX_HTML_DATA = (projectTitle, css , js)=>{
    let cssTag
    let jsTag
    if(css){cssTag = `<link rel="stylesheet" type="text/css" href="./assets/css/style.css">`}
    if(js) {jsTag = `<script defer type="text/javascript" src="./assets/js/script.js>`}
return(`
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
</html>`)
}

module.exports = GEN_INDEX_HTML_DATA