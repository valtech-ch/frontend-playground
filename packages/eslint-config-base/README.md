# eslint-config-base

Link the Valtech CH ESlint config for react:

    yarn link "@valtech-ch/eslint-config-react"

Add dependencies

    yarn add -D typescript jest eslint prettier

Add types

    yarn add -D @types/react

Add eslint plugins and configs

    yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-prettier eslint-config-prettier

Add `.eslintrc.js`

    echo 'module.exports = {
        extends: '@valtech-ch/eslint-config-react',
    }
    ' >> .eslintrc.js

Add `prettier.config.js`

    echo 'module.exports = require('@valtech-ch/eslint-config-react/prettier.config')
    ' >> prettier.config.js

Add `tsconfig.json`

    echo '{
        "extends": "@valtech-ch/eslint-config-react/tsconfig"
    }
    ' >> tsconfig.json
