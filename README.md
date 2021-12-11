# FileSystemOrganizer
Organizes all your files from from a folder into different section so that you need not to do it manually.

### Concepts used
* Used nodejs File System concepts and Javascript concepts
* https://nodejs.org/api/fs.html

## Commands
* This project has three commands available : 
* 1) Tree : It gives tree representation of driectory and filres present in your system.
* 2) Help : Lists out all the available commands
* 3) Organize : Organizes the files in the directory to particular types , the types can be media files , doc files , installation files.


### using shebang for node : 
* shebang helps our os know in which env to exceute the file
#!/usr/bin/env node , include this in the main file
* Modify the package.json :
  "bin": {
    "sortFiles": "main.js"
  }
* then run npm link : connect your parent application to a module you have locally on your machine.



### Screenshot
![image](https://user-images.githubusercontent.com/76193921/145675227-18c33e94-b397-405a-9a95-16fb3c1a24ee.png)


##### Folder Structure after running the above program
 ![image](https://user-images.githubusercontent.com/76193921/145675429-967e94ea-dea9-42f6-840c-20e2cc1fd8a8.png)


