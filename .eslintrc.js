module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    rules: {
        'prettier/prettier': 'error'
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    plugins: ['prettier']
}