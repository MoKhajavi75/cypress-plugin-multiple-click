<div align="center">

# cypress-plugin-multiple-click

[![npm version](https://badge.fury.io/js/cypress-plugin-multiple-click.svg)](https://badge.fury.io/js/cypress-plugin-multiple-click) &nbsp; [![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](https://www.typescriptlang.org/)

</div>

## ⚙️ Install

- npm:

```shell
npm install cypress-plugin-multiple-click
```

- yarn:

```shell
yarn add cypress-plugin-multiple-click
```

- pnpm:

```shell
pnpm add cypress-plugin-multiple-click
```

Then import the plugin into your `cypress/support/e2e.js` file:

```js
import 'cypress-plugin-multiple-click';
// or
require('cypress-plugin-multiple-click');
```

## 🧪 Usage

You can now easily use `cy.clicks()`. It takes two parameters:

- `times`: number of clicks - default is 1
- `options`: click options ([ref](https://docs.cypress.io/api/commands/click))

## 📐 Example

Take a look at [Cypress folder](/cypress/e2e/test.cy.ts)

## 📄 License

This project is licensed under the terms of the [MIT license](/LICENSE.md).
