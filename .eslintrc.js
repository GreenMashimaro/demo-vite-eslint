require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:sonarjs/recommended',
    'plugin:vue/recommended',
    '@vue/typescript/recommended',
    '@vue/eslint-config-prettier',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['sonarjs', 'vue', 'prettier'],

  globals: {
    globalThis: false,
  },

  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    'prefer-const': 2,
    'no-console':
      process.env.NODE_ENV === 'production' ? ['error', { allow: ['error'] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-tabs': 'off',
    'space-before-function-paren': 'off',
    'quote-props': ['error', 'as-needed'],
    'no-unused-vars': 'off',

    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/component-definition-name-casing': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    'vue/order-in-components': 'error',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
    'vue/require-explicit-emits': ['error'],
    'vue/no-multiple-template-root': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-shadow': ['error'],
    // 禁用魔术数字, 但忽略 0、-1、1 三个数字
    '@typescript-eslint/no-magic-numbers': [
      'error',
      { ignore: [0, -1, 1], ignoreEnums: true },
    ],

    // 强制数组方法的回调函数中有 return 语句
    'array-callback-return': 'error',
    // 限制函数圈复杂度不超过 10
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    complexity: ['error', 10],
    // 限制函数认知复杂度不超过 15
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    'sonarjs/cognitive-complexity': ['error', 15],
    // 要求函数使用一致的 return 语句【总是指定返回值或返回 undefined 无论是隐式或显式】
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    // 禁止在 else 前有 return
    'no-else-return': 'error',
    // 禁止使用不带 await 表达式的 async 函数
    'require-await': 'error',
    // 禁止在undefined值上使用可选链
    'no-unsafe-optional-chaining': 'error',
    // 在模块中强制执行排序的导入声明。
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },

  overrides: [
    {
      files: ['*.spec.ts'],
      rules: {
        // 关闭：禁用魔术数字
        '@typescript-eslint/no-magic-numbers': 'off',
        // 关闭：函数最大行数限制
        'max-lines-per-function': 'off',
        // 修改：强制回调函数最大嵌套深度
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        'max-nested-callbacks': ['warn', 10],
        // 去掉重复字符串
        'sonarjs/no-duplicate-string': 'off',
        // 强制行的最大长度
        'max-len': ['error', { code: 170 }],
      },
    },
  ],
}
