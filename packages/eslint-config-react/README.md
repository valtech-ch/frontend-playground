# eslint-config-react

Add this package

    yarn add -D @valtech-ch/eslint-config-react

Add dependencies

    yarn add -D typescript jest eslint prettier
    yarn add -D @types/react
    yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-prettier eslint-config-prettier

Add `.eslintrc.js`, `.eslintconfig`, `prettier.config.js` and `tsconfig.json`

    echo 'module.exports = {extends: '@valtech-ch/eslint-config-base'}' >> .eslintrc.js
    echo '.eslintrc.js' >> .eslintignore
    echo 'prettier.config.js' >> .eslintignore
    echo 'module.exports = require('@valtech-ch/eslint-config-base/prettier.config')' >> prettier.config.js
    echo '{"extends": "@valtech-ch/eslint-config-react/tsconfig"}' >> tsconfig.json
