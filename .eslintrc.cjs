/*eslint no-undef: "off"*/
module.exports = {
	root: true,
	env: { browser: true, es2020: true, node: true },
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	ignorePatterns: ["dist"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh", "simple-import-sort", "prettier"],
	rules: {
		"react-refresh/only-export-components": ["off", { allowConstantExport: true }],
		"@typescript-eslint/no-unused-vars": "warn",
		"@typescript-eslint/explicit-function-return-type": "warn",
		"simple-import-sort/imports": "warn",
		"simple-import-sort/exports": "warn",
		"prettier/prettier": [
			"off",
			{},
			{
				usePrettierrc: true,
			},
		],
	},
};
