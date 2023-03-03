import { babel } from '@rollup/plugin-babel';
import { obfuscator } from 'rollup-obfuscator';

const config = {
    input: 'src/index.js',
    output: {
        file: 'dist/cyberlabs-security-badge.js',
        format: 'iife'
    },
    plugins: [
        babel({ babelHelpers: 'bundled' }),
        obfuscator()
    ]
};

export default config;
