#!/usr/bin/env bash

# This script clones and installs the other admiralfeb.net repos.

read -p "Where should the admiralfeb repos clone (includes this repo)? (default ~/source/admiralfeb.net) : " repo_location
repo_location=${repo_location:-$HOME/source/admiralfeb.net}

mkdir -p ${repo_location}
cd "${repo_location}"

REPOS=(
    admiralfeb.net
    bwasm.admiralfeb.net
    cra.admiralfeb.net
    nextjs.admiralfeb.net
    ng.admiralfeb.net
    rust.admiralfeb.net
)

for repo in ${REPOS[@]}
do
    git clone git@github.com:Admiralfeb/$repo.git $repo
done
