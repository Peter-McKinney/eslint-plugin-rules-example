const requireEmitPrefix = require('./rules/require-emit-prefix');

const plugin = {
  // preferred location of name and version
  meta: {
    name: 'eslint-plugin-rules-example',
    version: '1.0.0',
  },
  rules: {
    'require-emit-prefix': requireEmitPrefix,
    //add additional rules here
  },
};

module.exports = plugin;
