#!/bin/bash

cd /home/MetroV-Testserver/
echo 'Check for Update...'
sleep 1
git pull --recurse-submodules
sleep 1
echo 'Update Done!'