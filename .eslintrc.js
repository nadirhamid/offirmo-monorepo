module.exports = {
	'root': true,
	'env': {
		'es6': true,
		'mocha': true,
		'shared-node-browser': true,
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true,
		}
	},
	'plugins': [
		'import',
		'node',
		'json',
		'mocha',
		'chai-expect',
		'react',
		'promise',
		'eslint-comments',
	],
	'settings': {
		'react': {
			'version': '16', // React version, default to the latest React stable release
		},
		/*'import/parsers': {
			'typescript-eslint-parser': ['.ts', '.tsx'],
		},*/
		'import/resolver': {
			'node': {
				'extensions': [
					'.js',
					'.jsx',
					'.ts',
					'.tsx',
				]
			}
		}
	},
	// TODO try 'all'
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:import/errors',
		'plugin:promise/recommended',
		'plugin:react/recommended',
		//'plugin:prettier/recommended', // TODO
		'prettier',
		'prettier/@typescript-eslint',
		'plugin:node/recommended',
	],
	'globals': {
		'require': true, // recognized by webpack / parcel, so always allowed.
	},
	'rules': {
		'camelcase': 'off',

		// those rules are covered by prettier
		'indent': ['error', 'tab'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		'linebreak-style': ['error', 'unix'],

		'no-console': 'off',  // TODO, too much noise for now
		'no-unused-vars': 'off',  // TODO, too much noise for now
		'chai-expect/missing-assertion': 'error',
		'chai-expect/no-inner-compare': 'error',
		'chai-expect/terminating-properties': 'error',
		'eslint-comments/disable-enable-pair': 'off',  // TODO, too much noise for now
		'import/no-unresolved': 'off', // buggy and no way we could miss that
		'mocha/no-exclusive-tests': 'error',
		'node/no-extraneous-require': 'off',  // TODO, too much noise for now
		'node/no-unsupported-features/es-syntax': 'off',  // TODO, too much noise for now
		'react/display-name': 'off',  // TODO, too much noise for now
		'react/prop-types': 'off',  // TODO, too much noise for now

		// typescript globals
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/no-var-requires': 'off', // TODO low prio
	},
	'overrides': [
		{
			'files': ['**/*.{ts,tsx}'],
			'parser': '@typescript-eslint/parser',
			'plugins': [
				'@typescript-eslint'
			],
			/*'extends': [
				'plugin:@typescript-eslint/recommended'
			],*/
			'rules': {
				// override of main
				'no-undef': 'off', // bug https://github.com/nzakas/eslint-plugin-typescript/issues/110

				// TS overrides
				'@typescript-eslint/no-explicit-any': 'off', // TODO
				'@typescript-eslint/explicit-function-return-type': 'off', // TODO low prio
				'@typescript-eslint/ban-types': 'off', // TODO low prio
				'@typescript-eslint/no-non-null-assertion': 'off', // TODO
				/*
				'no-unused-vars': 'off', // bug https://github.com/nzakas/eslint-plugin-typescript/issues/150
				//'import/no-unresolved': 'off', // bug on resolving .ts
				'import/named': 'off', // bug on types
				'@typescript-eslint/adjacent-overload-signatures': 'error',
				'@typescript-eslint/class-name-casing': 'error',
				'@typescript-eslint/interface-name-prefix': 'error',
				'@typescript-eslint/member-delimiter-style': {'delimiter': 'none'},
				'@typescript-eslint/member-naming': 'error',
				'@typescript-eslint/member-ordering': 'off', // TODO
				'@typescript-eslint/no-angle-bracket-type-assertion': 'error',
				'@typescript-eslint/no-array-constructor': 'error',
				'@typescript-eslint/no-empty-interface': 'off', // TODO
				'@typescript-eslint/no-inferrable-types': 'off',
				'@typescript-eslint/no-namespace': 'error',
				'@typescript-eslint/no-non-null-assertion': 'off', // TODO reactivate sometimes
				'@typescript-eslint/no-parameter-properties': 'error',
				'@typescript-eslint/no-triple-slash-reference': 'error',
				'@typescript-eslint/no-type-alias': 'off',
				'@typescript-eslint/no-unused-vars': 'error',
				'@typescript-eslint/no-use-before-define': 'off', // TODO
				'@typescript-eslint/prefer-namespace-keyword': 'error',
				'@typescript-eslint/type-annotation-spacing': 'error',
				*/
			},
		},
		{
			'files': ['**/doc/**/*.{ts,js,jsx}', 'webpack.config.ts'],
			'rules': {
				'no-unused-vars': 'off',
				'no-console': 'off',
				'typescript/no-var-requires': 'off',
			},
		},
		{
			'files': ['**/*_spec.ts'],
			'rules': {
				'typescript/explicit-function-return-type': 'off',
			},
		},
		{
			'files': ['**/doc/cheatsheet.js'],
			'env': {
				'node': true,
			},
			'rules': {
				'no-console': 'off',
				'node/no-extraneous-require': 'off',
			},
		},
		{
			'files': ['\\.eslintrc.js', 'prettier.config.js', 'webpack.config.ts'],
			'env': {
				'node': true,
			},
		},
	]
}
