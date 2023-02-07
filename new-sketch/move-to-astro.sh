#! /bin/bash

newDir="../astro/src/pages/$1"

mkdir $newDir

cp ./astro-template.astro "$newDir/index.astro"

cp ./src/* "$newDir"
