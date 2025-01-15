#!/bin/bash

git clone https://github.com/joshoti/DevPortalX.git
rm boot.sh
cd DevPortalX

npm install

echo "\nSetup complete. Running app"

npm run start