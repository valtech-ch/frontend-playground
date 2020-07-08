# Blog

## Stack

- React
- Next.js
- Typescript
- Emotion
- Tailwind

## Features

- Absolute imports

## How to build from scratch

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

4. With emotion and tailwind

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
