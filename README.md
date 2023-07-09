<p align='center'>
  <img src='./assets/logo.png' width='350' alt='Turistikrota UI Logo' />
</p>

<h1 align='center'>@turistikrota/ui</h1>

<p align='center'>
  <a href='https://www.npmjs.com/package/@turistikrota/ui' style={{ marginRight: '5px' }}>
    <img src='https://img.shields.io/npm/v/@turistikrota/ui.svg' alt='NPM Package Stable' />
  </a>
  <a href='https://github.com/turistikrota/kit.ui/LICENSE' style={{ marginRight: '5px' }}>
    <img src='https://img.shields.io/github/license/turistikrota/kit.ui' alt='License' />
  </a>
  <a href='https://www.jsdelivr.com/package/npm/@turistikrota/ui'>
    <img src='https://img.shields.io/jsdelivr/npm/hm/@turistikrota/ui' alt='jsDelivr hits' />
  </a>
</p>

`@turistikrota/ui` kit was developed by [`Turistikrota Tech`](https://github.com/turistikrota) for use in shared websites.

This ui kit can only be used in `React` projects. Suitable for `NextJS` and `Vite`.

## How to use

install the kit with your package manager:

```bash
yarn add @turistikrota/ui
```

Next, let's update the tailwind and postcss configuration:

```js
// tailwind.config.js
const { withTouristicUI } = require('@turistikrota/ui/config')

module.exports = withTouristicUI({
  // your tailwind config
})

// postcss.config.js
module.exports = require('@turistikrota/ui/assets/postcss.config.cjs')
```

Finally, we need to load css to use our tailwind values. In your main `js/ts` file:

```js
import '@turistikrota/ui/assets/config.css'
```

Or in your `css` file:

```css
@import '@turistikrota/ui/assets/config.css';
```

Okey now we can use our components:

```jsx
import Button from '@turistikrota/ui/button'

export default function Home() {
  return <Button>Click Me</Button>
}
```

## Linter and Formatter

It provides configuration for the tourist route eslint and prettier.

Note: These configurations can be used independently of the ui kit.

### Eslint

For eslint, you need to install the following packages:

```bash
yarn add -D eslint eslint-config-turistikrota
```

Then you need to create a `.eslintrc.js` file in the root directory of your project and add the following code:

```js
module.exports = {
  extends: ['turistikrota'],
}
```

That's all, now you can use eslint.

### Prettier

For prettier, you need to install the following packages:

```bash
yarn add -D prettier @turistikrota/prettier-config
```

Then you need to add the following code to the `package.json` file:

```json
{
  "prettier": "@turistikrota/prettier-config"
}
```

## Contribution

`@turistikrota/ui` is always open for direct contributions. Contributions can be in the form of design suggestions, documentation improvements, new component
suggestions, code improvements, adding new features or fixing problems. For more information please check our [Contribution Guideline document](https://github.com/turistikrota/kit.ui/CONTRIBUTION.md).
