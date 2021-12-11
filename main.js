#!/usr/bin/env node
//shebang -> helps our os know in which env to exceute the file

let inputArr = process.argv.slice(2);
let fs = require('fs');
let path = require('path');
let helpObj = require('./commands/help');
let orgainzeObj = require('./commands/organize');
let treeObj = require('./commands/tree');
//console.log(inputArr);


let command = inputArr[0];
switch(command) {
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        orgainzeObj.orgainzerKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("please input right command");
        break;
}

//npm link : connect your parent application to a module you have locally on your machine.

