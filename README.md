# Frontent tools configuration

## Tools

- snowpack
  - typescript
  - babel
  - eslint
    - prettier/typescript recommended
- sass
  - dart sass
    - ready to use gui mixins
    - resolves node_modules
  - postcss
    - autoprefixer
    - preset-env
    - cssnano
    - combine-media-query
    - extract-media-query
      - build generates \*.css files for every MQ defined in gui
        - if you change the MQ, you have to change it in postcss config as well
  - stylelint
  - ress.css
- test
  - jest + typescript
- other
  - prettier
  - editorconfig
  - paths aliases defined for Snowpack, TypeScript and Jest

### There's no configuration for HTML and JS

## Paths

- Source - `assets`
- Distribution - `public`

## Npm scripts

- `clear` - clear dist directory
- `watch` - watch ts and sass
- `build` - build for production
- `postcss` - postcss for built styles
- `list` - lint ts and sass
- `test` - run tests
