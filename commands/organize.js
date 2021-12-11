// organizes different types into their respective folders
let fs = require('fs');
let path = require('path');

let types = {
    media: ["mp4","mkv"],
    archives: ['zip','7z','rar','tar','gz','iso'],
    document: ['docx','doc','pdf','xlsx','xls','txt','odt'],
    app: ['exe','dmg','pkg','deb']
}

function organizerFn(dirPath){
    console.log("Organize command implemented for", dirPath);
    //1. input dir path given
    let destPath;
    if(dirPath==undefined)
    {
        console.log('Please enter correct path');
        destPath = process.cwd();
        return;
    }
    else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            //2. create organized_files directory

           destPath = path.join(dirPath,'organized_files');
           if(fs.existsSync(destPath)==false)
           {
                fs.mkdirSync(destPath);
           }

        } else {
            console.log('Please enter the correct path ok');
            return;
        }
    }
    organizeHelper(dirPath,destPath);
}

function organizeHelper(src, dest){
    let childnames = fs.readdirSync(src);
   // console.log(childnames);
    for(let i=0; i<childnames.length;i++)
    {
        let childAddress = path.join(src,childnames[i]);
        let isFile = fs.lstatSync(childAddress).isFile(); //lstatSync -> file/folder
        if(isFile){
            let category = getCategory(childnames[i]);
            console.log(childnames[i],"belongs to this -> ",category);
           // console.log(childnames[i]);
           sendFiles(childAddress,dest,category);
        }
    }
}

//copying files from src to dest
function sendFiles(srcFilePath, dest, category){
let categoryPath = path.join(dest,category);
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath,fileName);
    fs.copyFileSync(srcFilePath,destFilePath);
    //In os , empty file is created first at dest folder and then transfers its content from src to dest.
    fs.unlinkSync(srcFilePath);
    //removing the file from srcPath
}


function getCategory(name){
    let ext = path.extname(name);
    ext = ext.slice(1);
    for(let type in types)
    {
        let cTypeArray = types[type];
        for(let i=0;i<cTypeArray.length;i++){
            if(ext==cTypeArray[i])
                return ext;
        }
      
    }
    return "others";
}

module.exports={
    orgainzerKey : organizerFn
}