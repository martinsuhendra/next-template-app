/** @type{import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  overrides: [
    {
      files: ['**/*.spec.ts', '**/*.spec.tsx'],
      plugins: ['jest'],
      extends: ['plugin:jest/all', 'plugin:testing-library/react'],
      rules: {
        'jest/prefer-expect-assertions': 0,
        'jest/no-hooks': 0,
        'jest/no-mocks-import': 0,
        'jest/max-expects': 0,
      },
    },
    {
      files: ['**/*.stories.tsx'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        'react/function-component-definition': 0,
      },
    },
  ],
  rules: {
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-relative-packages': 0,
    'import/extensions': 0,
    'import/no-import-module-exports': [
      2,
      {
        exceptions: ['**/*/jest.config.ts'],
      },
    ],
    'global-require': 0,
    'no-console': [2, { allow: ['warn', 'error'] }],
    'no-param-reassign': [
      2,
      { props: true, ignorePropertyModificationsFor: ['state', 'req'] },
    ],
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-restricted-imports': [
      1,
      {
        paths: [
          {
            name: 'lodash',
            message:
              'Please use `import [package] from lodash/[package]` instead.',
          },
          {
            name: 'react',
            importNames: ['default'],
            message: 'Please import required APIs directly from `react`.',
          },
        ],
      },
    ],
    'no-restricted-exports': 0,
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-underscore-dangle': 0,
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/prop-types': 0,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          ['^react', '^@?\\w'],
          ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.s?css$'],
        ],
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '(^_|^theme$)',
      },
    ],
    'unicorn/consistent-function-scoping': 0,
    'unicorn/no-null': 0,
    'unicorn/no-array-reduce': 0,
    'unicorn/no-thenable': 0,
    'unicorn/prefer-module': 0,
    'unicorn/prefer-top-level-await': 0,
    'unicorn/prevent-abbreviations': 0,
    'unicorn/filename-case': [
      2,
      { cases: { camelCase: true, pascalCase: true, kebabCase: true } },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
