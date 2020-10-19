module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 'off',
  },
};
