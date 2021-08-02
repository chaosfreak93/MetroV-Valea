#!/bin/bash

cd /home/MetroV-Valea/script-a-master/Server/
screen -dmS "altv" ./altv-server --extra-res-folder cars/ --extra-res-folder maps/
