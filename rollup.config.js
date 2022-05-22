import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';

import packageJson from './package.json';

export default [
    {
        input: 'src/index.js',
        output: [
            {
                format: 'cjs',
                file: packageJson.main,
                sourcemap: true,
            },
            {
                format: 'esm',
                file: packageJson.module,
                sourcemap: true,
            },
        ],
        plugins: [peerDepsExternal(), resolve(), css(), vue({ css: false })],
    },
];
