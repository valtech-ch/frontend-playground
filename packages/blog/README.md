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