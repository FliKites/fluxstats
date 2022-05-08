module.exports = {
  root: true,
  env: {
    commonjs: true,
    node: true,
    mocha: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'max-len': [
      'error',
      {
        code: 300,
        ignoreUrls: true,
        ignoreTrailingComments: true,
      },
    ],
    'no-new': 'off',
    'no-restricted-syntax': 'off',
    'no-console': 'off',
    'linebreak-style': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'vue/multi-word-component-names': 'off',
    'prefer-destructuring': ['error',
      {
        object: true, array: false,
      },
    ],
    'import/no-extraneous-dependencies': ['error',
      {
        devDependencies: true, optionalDependencies: true, peerDependencies: false,
      },
    ],
    camelcase: ['error',
      {
        properties: 'never', ignoreDestructuring: true, ignoreImports: true,
      },
    ],
    'import/extensions': ['error', 'ignorePackages',
      {
        vue: 'always', js: 'never',
      },
    ],
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.vue',
        ],
      },
    },
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
    {
      files: ['*.html'],
      rules: {
        'vue/comment-directive': 'off',
      },
    },
  ],
};
