module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'enforce that a variable created from defineEmits is named $emit',
    },
    messages: {
      noEmitPrefix: 'Variables created from defineEmits must be named $emit',
    },
    fixable: 'code',
    schema: [],
  },
  create(context) {
    return {
      // Performs action in the function on every variable declarator
      VariableDeclarator(node) {
        if (
          node.init &&
          node.init.callee &&
          node.init.callee.name === 'defineEmits' &&
          node.id.name !== '$emit' // Ensure the name isn't already corre
        ) {
          context.report({
            node,
            messageId: 'noEmitPrefix',
            fix(fixer) {
              return fixer.replaceText(node.id, '$emit');
            },
          });
        }
      },
    };
  },
};
