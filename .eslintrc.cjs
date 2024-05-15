/* eslint-disable @stylistic/linebreak-style */
// eslint-disable-next-line no-undef
module.exports = {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
	parser: '@typescript-eslint/parser',
	root: true,
	plugins: [
		'@typescript-eslint',
		'@stylistic/eslint-plugin',
		'eslint-plugin-newline-after-if-condition',
	],
	rules: {
		'react/jsx-tag-spacing': ['error', {
			beforeSelfClosing: 'never'
		}],
		'react/jsx-curly-brace-presence': ['error', {
			props: 'never',
			children: 'never',
		}],
		'react/react-in-jsx-scope': 'off',
		indent: ['error', 'tab'],
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		'jsx-quotes': ['error', 'prefer-double'],
		'keyword-spacing': 'error',
		'space-before-blocks': 'error',
		'curly': 'error',
		'padded-blocks': ['error', 'never', {
			allowSingleLineBlocks: false,
		}],
		'@typescript-eslint/no-unused-vars': 'warn',
		'@stylistic/block-spacing': 'error',
		'@stylistic/object-curly-spacing': ['error', 'always'],
		'@stylistic/no-tabs': ['error', { allowIndentationTabs: true }],
		'@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
		'@stylistic/linebreak-style': ['error', 'windows'],
		'@stylistic/no-whitespace-before-property': 'error',
		'newline-after-if-condition/rule': ['error'],
		'dot-location': ['error', 'property']
	}
};