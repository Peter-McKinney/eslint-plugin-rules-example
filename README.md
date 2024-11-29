# eslint-plugin-rules-example

An example plugin for developing custom eslint rules based on the recommended setup from eslint.

## Installation and Setup

### Installation

Eslint will always look for plugins in node_modules by searching for `eslint-plugin-*`. You do not have to include `eslint-plugin` in the plugin name in the eslint configuration, `rules-example` works.

```bash
npm install eslint-plugin-rules-example --save-dev
```

### Setup eslintrc.js to use rules example

Modify your eslintrc.js to include the plugin:

```javascript
  plugins: [
    "rules-example"
  ],
```

Add a custom eslint rule:

```javascript
  'rules': {
    'rules-example/require-emit-prefix': 2
  }
```

> NOTE: This package was created based on the recommendations from eslint: https://eslint.org/docs/latest/extend/plugins

## Development:

### Creating a new rule:

> NOTE: Eslint has a tutorial which is a great place to start: https://eslint.org/docs/latest/extend/custom-rule-tutorial

All rules are currently stored in the rules directory. Try creating a new rule file based off a current rule. A minimal rule stub looks like:

```javascript
module.exports = {
  meta: {
    //add metadata
  },
  create(context) {
    return {
      //add callback functions
    };
  },
};
```

**Always add a unit test for a rule**

Create a new file in the tests/ directory by the same name but add .test.js as the file affix. Make sure to at least add a valid case and an invalid case.

The entire test suite can be run with

```
npm run test
```

OR you can run your individual test with JEST:

```
npx jest test/require-emit-prefix.test.js
```

OR you can use node:

```
node require-emit-prefix.test.js
```

### npm link - running the package locally

- Make sure you are at the root of the project (eslint-plugin-rules-example) and run:

```bash
npm link
```

> NOTE: This will create a symbolic link to the npm package as specified here: https://docs.npmjs.com/cli/v9/commands/npm-link

Change over to the project you intend on linking this package to and link the package by PACKAGE name (eslint-plugin-rules-example)

```bash
cd ~/projects/app
npm link eslint-plugin-rules-example
```

> NOTE: at this step it's a good idea to test the new rules are picked up in the application. Look for an example that breaks the rule or create one

### Pre-commit hooks and required checks

We have a pre-commit hook defined using husky (you can view these rules here: .husky/pre-commit) which will run:

1. A prettier format on all staged git files and update the git index.
2. The unit tests with `npm run test`
3. The eslinter on this plugin project specifically with `npm run lint`

Please make sure all checks pass prior to creating a merge request.
