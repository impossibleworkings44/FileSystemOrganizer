///prints tree structure for files & folders
let fs = require('fs');
let path = require('path');

function treeFn(dirPath){
    //console.log("Tree command implemented for", dirPath);
    if(dirPath==undefined)
    {
        treeHelper(process.cwd(),"");
        return;
    }
    else{
        let doesExist = fs.existsSync(dirPath, "");
        if(doesExist){
            treeHelper(dirPath);
        } else {
            console.log('Please enter the correct path ok');
            return;
        }
    }
}


function treeHelper(dirPath,indent)
{
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile){
        let fileName = path.basename(dirPath);
        console.log(indent +" ├── "+ fileName);
    }
    else{

        let dirName = path.basename(dirPath);
        console.log(indent + "└──" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for(let i=0; i<childrens.length; i++){
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}

module.exports={
    treeKey : treeFn
}