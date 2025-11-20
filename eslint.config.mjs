// ESLint configuration for Next.js with Prettier integration
// Based on official Next.js documentation: https://nextjs.org/docs/app/api-reference/config/eslint
// Prettier integration: https://github.com/prettier/eslint-config-prettier

import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin,
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      // Allow setState in useEffect for legitimate hydration patterns
      'react-hooks/set-state-in-effect': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  prettierConfig,
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'node_modules/**', 'Veridian/**'],
  },
];
