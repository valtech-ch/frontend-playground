# Styleguide

## Folder structure

- Define a "components" package to keep a global shareable components library.
- Define a "eslint-config" package to share the eslint + prettier config.
- The "pages" don't contain any presentational component. They just get the data and provide it in the right format to the template from "components"
- Question: Is it possible to keep this structure without any nesting of children components in the templates and pages?

### General example

    - packages
      - components
        - atoms
          - AtomName.tsx
          - AtomName.test.tsx
        - molecules
          - MoleculeName.tsx
          - MoleculeName.test.tsx
        - organisms
          - OrganismName.tsx
          - OrganismName.test.tsx
        - templates
          - TemplateName.tsx
          - TemplateName.test.tsx
      - eslint-config
      - package-1
        - constants
        - contexts
        - pages
          - PageName1.tsx
          - PageName1.test.tsx
        - services
        - styles
        - types
        - utils
      - package-2
        ...

### Specific example for the blog

    - packages
      - blog-with-graphcms
        - pages
          - HomePage.tsx (content from graphcms with BlogHomeTemplate)
      - blog-with-markdown
        - pages
          - HomePage.tsx (content from markdown files with BlogHomeTemplate)
      - blog-with-prismic
        - pages
          - HomePage.tsx (content from prismic with BlogHomeTemplate)
      - components
        - atoms
          - Button.tsx
          - Button.test.tsx
          - Image.tsx
          - Image.test.tsx
          - Link.tsx
          - Link.test.tsx
          - Typography.tsx
          - Typography.test.tsx
        - molecules
          - Logo.tsx
        - organisms
        - templates
          - BlogHomeTemplate.tsx
          - BlogCategoryTemplate.tsx
          - BlogPostTemplate.tsx
      - jam-stack-1
      - tools
    - scripts
      .gitignore
      lerna.json
      package.json
      README.md
      STYLEGUIDE.md

## Components

- Only 1 component per file
- Keep the UI in the main component
- Keep logic in a custom hook

The component:

    // ComponentA.tsx

    import useComponentA from './useComponentA'

    type ComponentAProps = {

    }

    export default function ComponentA({}: ComponentAProps) {
        // logic
        const { outputA, outputB } = useComponentA({ inputA, inputB })

        // UI
        return ...

    }

And the hook:

    // useComponentA.tsx

    export function useComponentA({ inputA, inputB }) {
        // useState
        // useEffect
        // useReducer
        // useCallback
        // useCustomHook
        // myCustomFunction
        ...

        return { outputA, outputB }
    }
