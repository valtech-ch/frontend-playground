---
title: Basic starter with React and Next.js
slug: basic-starter-with-react-and-nextjs
publishDate: '09-07-2020'
author: Lorenzo Garcia Moreno
published: true
category: Javascript
featuredImage: 'http://picsum.photos/seed/Create/800/500'
---

1. Create a next app: `yarn create next-app`

2. With typescript

- Add the `tsconfig.json` file: `touch tsconfig.json`.
- Run `yarn dev`: Next.js will automatically configure the project.
- Install typescript: `yarn add --dev typescript @types/react`.
- Strict mode is of by default, turn it on in `tsconfig.json`.

3. With absolute imports: add `baseUrl` to `tsconfig.json`

```
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

4. Linting Setup

- Add eslint: `yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`
- Add prettier: `yarn add -D prettier eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks`
- Create `.prettierrc` with the following config:

```
{
  "semi": false,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 120
}
```

- Create `.eslintrc` with the following config:

```
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": { "jsx": true }
  },
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    // Prettier plugin and recommended rules
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "rules": {
    // Include .prettierrc.js rules
    "prettier/prettier": ["error", {}, { "usePrettierrc": true }],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        "labelComponents": [],
        "labelAttributes": [],
        "controlComponents": [],
        "assert": "either",
        "depth": 25
      }
    ],
    "@typescript-eslint/no-explicit-any": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

5. Styling

- Add dependencies: `yarn add @emotion/core @emotion/styled @emotion/react`
- Add dev dependencies: `yarn add --dev @emotion/babel-plugin @tailwindcss/ui @tailwindcssinjs/macro babel-plugin-macros tailwindcss`
- Add a new script to `package.json` to update `base.css` when a new plugin has been added to tailwind: `"build:base-css": "tailwindcss build ./styles/tailwind.base.css -o ./styles/base.css"`
- Create `.babelrc.js`:

```
{
  "presets": ["next/babel"],
  "plugins": ["macros", "emotion"]
}
```

- Create `tailwind.config.js`:

```
module.exports = {
  theme: {},
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
```
