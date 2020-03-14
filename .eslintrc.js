module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', '@vue/standard', 'plugin:prettier/recommended'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    globals: {
        __static: true,
    },
    rules: {
        'prettier/prettier': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-var': 'error',
    },
}
