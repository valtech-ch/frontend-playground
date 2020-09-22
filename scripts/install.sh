#!/usr/bin/env bash

cd "$(dirname "$0")"
cd ..

yarn workspace @valtech-ch/eslint-config-react link
yarn link "@valtech-ch/eslint-config-react"

yarn install --ignore-scripts