const nodePlugin = require('eslint-plugin-n');
const eslintPlugin = require('eslint-plugin-eslint-plugin');

module.exports = [
  nodePlugin.configs['flat/recommended-script'],
  {
    rules: {
      'n/exports-style': ['error', 'module.exports'],
    },
  },
  eslintPlugin.configs['flat/recommended'],
  {
    rules: {
      'eslint-plugin/require-meta-docs-description': 'error',
    },
  },
];
