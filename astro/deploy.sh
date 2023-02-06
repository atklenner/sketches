#!/bin/bash

set -e

pnpm run build

cd dist

echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m "deploy"

git push -f https://github.com/atklenner/visualizations.git main:gh-pages

cd -
