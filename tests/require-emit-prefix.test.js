const { RuleTester } = require('eslint');
const requireEmitPrefix = require('../rules/require-emit-prefix');

const ruleTester = new RuleTester({
  // Must use at least ecmaVersion 2015 because
  // that's when `const` variables were introduced.
  languageOptions: { ecmaVersion: 2015 },
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  'require-emit-prefix', // rule name
  requireEmitPrefix, // rule code
  {
    // checks
    // 'valid' checks cases that should pass
    valid: [
      {
        code: "const $emit = defineEmits(['someemit', 'anotheremit'])",
      },
      {
        code: "defineEmits(['someemit', 'anotheremit'])",
      },
    ],
    // 'invalid' checks cases that should not pass
    invalid: [
      {
        code: "const emit = defineEmits(['update:show', 'rotation']);",
        output: "const $emit = defineEmits(['update:show', 'rotation']);",
        errors: 1,
      },
      {
        code: "const badName = defineEmits(['update:show', 'rotation']);",
        output: "const $emit = defineEmits(['update:show', 'rotation']);",
        errors: 1,
      },
    ],
  },
);

console.log('All tests passed!');
