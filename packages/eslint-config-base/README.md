# eslint-config-base

Add this package

    yarn add -D @valtech-ch/eslint-config-base

Add peer dependencies

    yarn add -D typescript eslint prettier
    yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier eslint-config-prettier

Add `.eslintrc.js`, `.eslintconfig`, `prettier.config.js` and `tsconfig.json`

    echo 'module.exports = {extends: '@valtech-ch/eslint-config-base'}' >> .eslintrc.js
    echo '.eslintrc.js' >> .eslintignore
    echo 'prettier.config.js' >> .eslintignore
    echo 'module.exports = require('@valtech-ch/eslint-config-base/prettier.config')' >> prettier.config.js
    echo '{"extends": "@valtech-ch/eslint-config-react/tsconfig"}' >> tsconfig.json
