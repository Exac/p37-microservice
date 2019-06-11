module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin ],
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports }
    },
    rules: { // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        '@typescript-eslint/interface-name-prefix': 'off',
        'import/prefer-default-export': false,
    },
    overrides: [
        {
            files: ['src/**/*.spec.ts'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': false
            }
        }
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts']
            }
        }
    }
};
