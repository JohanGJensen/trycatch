import globals from "globals";
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';

const config = [
    js.configs.recommended,
    {
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2024,
            globals: globals.browser,
        },
    },
    {
        files: ['src/**/*.ts']
    },
    {
        ignores: ['eslint.*', 'dist']
    },
    {
        rules: {
            semi: 'error',
        },
    }
];

export default config;
