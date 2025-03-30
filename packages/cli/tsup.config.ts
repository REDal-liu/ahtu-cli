

import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['lib/index.ts'],
    outDir: 'dist',
    format: ['cjs'],
    dts: true,
    clean: true,
    outExtension() {
        return {
            js: '.js'
        }
    }
})