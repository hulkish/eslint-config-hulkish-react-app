module.exports = {
  extends: [
    'plugin:flowtype/recommended'
  ],
  plugins: [
    'flowtype',
  ],
  parser: 'babel-eslint',
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },
  rules: {
    'flowtype/object-type-delimiter': ['error', 'semicolon']
  }
};
