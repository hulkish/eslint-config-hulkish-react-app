module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/strict',
    './rules/promises',
    './rules/react',
    './rules/react-a11y',
    './rules/flowtype',
    // './rules/graphql',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  parser: 'babel-eslint',
  env: {
    "browser": true,
  },
};

