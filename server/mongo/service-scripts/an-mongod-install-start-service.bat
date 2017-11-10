mkdir ..\db
mkdir ..\log 
echo 'initiating creation of mongod service...'
sc.exe create ANPanoramaMongoDB binPath= "\"C:\Programs\MongoDB\Server\3.4\bin\mongod.exe\" --service --config=\"E:\Data\Work2017\github\anpanorama\server\mongo\config\an-mongod.cfg\"" DisplayName= "ANPanoramaMongoDB" start= "auto"
echo 'created ANPanoramaMongoDB service...'
echo 'starting ANPanoramaMongoDB service...'
net start ANPanoramaMongoDB
echo 'started ANPanoramaMongoDB service...'
echo 'all done!!!'
