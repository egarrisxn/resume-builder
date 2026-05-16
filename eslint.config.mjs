import {defineConfig, globalIgnores} from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import * as mdx from 'eslint-plugin-mdx'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    name: 'mdx/recommended',
    files: ['**/*.mdx'],
    ...mdx.flat,
  },
  {
    rules: {
      'no-console': ['warn', {allow: ['warn', 'error']}],
    },
  },
  globalIgnores([
    '.next/**',
    '.git/**',
    '.vscode/**',
    '.vercel/**',
    'coverage/**',
    'node_modules/**',
    'dist/**',
    'public/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '**/node_modules/',
  ]),
  prettier,
])

export default eslintConfig
