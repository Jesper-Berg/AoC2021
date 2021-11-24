#!/usr/bin/env bash

for i in $(seq -w 1 25); do
    mkdir "day$i"
    pushd "day$i"

    yarn init -y
    yarn
    
    cp ../exampleDocker Dockerfile
    cp ../exampleIndex.js index.js

    popd
done