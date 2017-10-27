echo 'stopping ANPanoramaMongoDB service...'
net stop ANPanoramaMongoDB
echo 'stopped ANPanoramaMongoDB service...'
echo 'deleting ANPanoramaMongoDB service...'
sc.exe delete ANPanoramaMongoDB
echo 'deleted ANPanoramaMongoDB service...'
echo 'all done!!!'
