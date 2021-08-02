#!/bin/bash

cd /home/MetroV/
echo 'Check for Update...'
sleep 1
git pull --recurse-submodules
sleep 1
echo 'Update Done!'
cd /home/MetroV-Valea/script-a-master/Server/
echo 'Packing CDN...'
rm cdn_upload/ -r
sleep 1
./altv-server --extra-res-folder cars/ --extra-res-folder maps/ --host 5.181.151.136 --port 7788 --justpack
sleep 1
sudo mv cdn_upload/* /var/www/cdn/
echo 'CDN packed!'