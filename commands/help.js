//help fn for commands present in the program
function helpFn(){
    console.log(
        `List of All the commands:
                node main.js tree "directoryPath"
                node main.js organize "directoryPath"
                node main.js help
        `
    )
}

module.exports={
    helpKey: helpFn
}