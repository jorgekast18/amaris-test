module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.e2e.js'],
      env: {
        jest: true,
        browser: true,
        amd: true,
        node: true,
      },
    },
  ],
  rules: {
    curly: 'off',
    'no-unused-vars': 'off',
    'no-unsafe-optional-chaining': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 2,
    'no-extend-native': ['error', { exceptions: ['Error'] }],
    'react/no-unstable-nested-components': [
      'off' || 'warn' || 'error',
      {
        allowAsProps: true,
        customValidators: [] /* optional array of validators used for propTypes validation */,
      },
    ],
  },
  globals: {
    shallow: true,
    render: true,
    mount: true,
  },
  env: {
    jest: true,
    browser: true,
    amd: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
};
