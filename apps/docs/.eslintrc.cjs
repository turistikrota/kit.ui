module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['turistikrota'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    // project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  ignorePatterns: ['.eslintrc.cjs', 'tailwind.config.cjs', 'postcss.config.cjs'],
}
