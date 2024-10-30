module.exports = {
  root: true,
  ignorePatterns: ['README.md', 'tsconfig.json', 'package.json', 'package-lock.json', 'tsconfig.node.json'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.json']
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'no-unsafe-optional-chaining': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-nested-ternary': 'error',
    'no-constant-condition': 'off',
    'linebreak-style': 0,
    'prettier/prettier': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          '@app/**',
          '@processes/*/**',

          '@pages/*/*/**',
          // было вот так '@pages/*/**',

          '@widgets/*/**',

          '@features/*/*/**',
          '@entities/*/**',
          '@shared/*/*/**',

          '../**/app',
          '../**/processes',
          '../**/pages',
          '../**/widgets',
          '../**/features',
          '../**/entities',
          '../**/shared'
        ]
      }
    ],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        pathGroups: ['@processes/**', '@pages/**', '@widgets/**', '@features/**', '@entities/**', '@shared/**'].map(
          pattern => ({
            pattern,
            group: 'internal',
            position: 'after'
          })
        ),
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
      }
    ],
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          // processes
          {
            target: 'src/processes',
            from: 'src/app'
          },
          // Cross import
          {
            target: 'src/processes/*/**/*',
            from: 'src/processes/*/index.ts'
          },

          // pages
          {
            target: 'src/pages',
            from: 'src/app'
          },
          {
            target: 'src/pages',
            from: 'src/processes'
          },
          // Cross import
          {
            target: 'src/pages/*/**/*',
            from: 'src/pages/*/index.ts'
          },

          // widgets
          {
            target: 'src/widgets',
            from: 'src/app'
          },
          {
            target: 'src/widgets',
            from: 'src/processes'
          },
          {
            target: 'src/widgets',
            from: 'src/pages'
          },
          // Cross import
          {
            target: 'src/widgets/*/**/*',
            from: 'src/widgets/*/index.ts'
          },

          // features
          {
            target: 'src/features',
            from: 'src/app'
          },
          {
            target: 'src/features',
            from: 'src/processes'
          },
          {
            target: 'src/features',
            from: 'src/pages'
          },
          {
            target: 'src/features',
            from: 'src/widgets'
          },
          // Cross import
          {
            target: 'src/features/*/**/*',
            from: 'src/features/*/index.ts'
          },

          // entities
          {
            target: 'src/entities',
            from: 'src/app'
          },
          {
            target: 'src/entities',
            from: 'src/processes'
          },
          {
            target: 'src/entities',
            from: 'src/pages'
          },
          {
            target: 'src/entities',
            from: 'src/widgets'
          },
          {
            target: 'src/entities',
            from: 'src/features'
          },
          // Cross import
          {
            target: 'src/entities/*/**/*',
            from: 'src/entities/*/index.ts'
          },

          // shared
          {
            target: 'src/shared',
            from: 'src/app'
          },
          {
            target: 'src/shared',
            from: 'src/processes'
          },
          {
            target: 'src/shared',
            from: 'src/pages'
          },
          {
            target: 'src/shared',
            from: 'src/widgets'
          },
          {
            target: 'src/shared',
            from: 'src/features'
          },
          {
            target: 'src/shared',
            from: 'src/entities'
          }
        ]
      }
    ],
    'import/default': 'off',
    'import/export': 'off',
    'import/no-named-as-default-member': 'off',
    'import/namespace': 'off',
    'import/no-unresolved': [2, { caseSensitive: false }],

    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'off',
    'react/destructuring-assignment': ['error', 'always'],
    'react/jsx-boolean-value': 'error',
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-handler-names': 'error',
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        multiline: 'last',
        noSortAlphabetically: false
      }
    ],

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports'
      }
    ],
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: true
      }
    ]
  },
  settings: {
    'import/resolver': {
      typescript: true
    },
    react: {
      version: 'detect'
    }
  }
}
