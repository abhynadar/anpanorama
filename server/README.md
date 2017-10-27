# anpanorama-server


```
//Prerequisite - Install mongodb 

//Clone git repository
$ git clone https://github.com/abhynadar/anpanorama.git

//Go to anpanorama/server/mongo/config
//Create a copy of an-mongod.cfg
//Rename it to <your-initial>-mongod.cfg example - ms-mongod.cfg
//Open <your-initial>-mongod.cfg and edit paths to reflect your system paths

//Go to anpanorama/server/mongo/service-scripts
//Create a copy of an-mongod-install-start-service.bat
//Rename it to <your-initial>-mongod-install-start-service.bat example - ms-mongod-install-start-service.bat
//Open <your-initial>-mongod-install-start-service.bat and edit paths to reflect your system paths

//Create a copy of an-mongod-stop-delete-service.bat
//Rename it to <your-initial>-mongod-stop-delete-service.bat example - ms-mongod-stop-delete-service.bat
//Open <your-initial>-mongod-stop-delete-service.bat and edit paths to reflect your system paths

//Create a copy of an-mongo-start-client.bat
//Rename it to <your-initial>-mongo-start-client.bat example - ms-mongo-start-client.bat
//Open <your-initial>-mongo-start-client.bat and edit paths to reflect your system paths

//Open command prompt that is run with administrative rights and switch to anpanorama/server/mongo/service-scripts
$ cd anpanorama/server/mongo/service-scripts

//Execute <your-initial>-mongod-install-start-service.bat from command prompt that is run with administrative rights
$ <your-initial>-mongod-install-start-service.bat
//This will create a register mongod as a windows service and will start it

//Execute <your-initial>-mongo-start-client.bat from command prompt that is run with administrative rights
$ <your-initial>-mongo-start-client.bat
//This will start mongo client session

----------------------------------------------------------------------------------
//Execute <your-initial>-mongod-stop-delete-service.bat from command prompt that is run with administrative rights
$ <your-initial>-mongod-stop-delete-service.bat
//This will stop and delete the windows service for mongod
----------------------------------------------------------------------------------

//Open another command prompt that is run with administrative rights and switch to anpanorama/server
$ cd anpanorama/server

//Execute npm install to install all the node modules
$ npm install

//Execute npm start to start the api service
$ node start

```
---
