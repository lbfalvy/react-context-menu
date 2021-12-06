import ts from 'rollup-plugin-ts';
import html from '@rollup/plugin-html';
import commonjs from "@rollup/plugin-commonjs";
import sass from 'rollup-plugin-sass';
import serve from 'rollup-plugin-serve';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default {
    input: 'src/demo.tsx',
    output: {
        dir: './demo',
        format: 'esm',
        sourcemap: 'inline'
    },
    plugins: [
        ts(),
        commonjs(),
        html(),
        sass({
            insert: true
        }),
        serve('demo'),
        nodeResolve(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        })
    ]
}