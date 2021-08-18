#!/bin/bash

cd /home/MetroV-Testserver/script-a-master/Server/
screen -dmS "Testserver" ./altv-server --extra-res-folder cars/ --extra-res-folder maps/
