#!/bin/bash

cd ./projectA && npm run build
cd ..
cd ./projectB && npm run build
cd ..
cd ./projectC && npm run build