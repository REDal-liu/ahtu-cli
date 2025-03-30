import tseslint from "typescript-eslint";
import globals from "globals";
import importSort from "eslint-plugin-simple-import-sort";
import js from "@eslint/js";


export default tseslint.config({
    // 继承哪些规则
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    // 检测哪些文件
    files: ["**/*.ts"],
    // 忽略哪些文件
    ignores: ["*.js"],
    rules: {
        // 定义插件的规则
        "simple-import-sort/imports": [
            'error',
            {
                groups: [
                    ['^\\w'], // 表示 node 内置模块
                    ['^@\\w'],  // 表示以 @ 开头的路径
                    ['^@/'], // 表示以 @ 开头的自定义识别路径
                    ['^\\u0000'],
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$']
                ]
            }
        ],
        "simple-import-sort/exports": "error",
        // "no-console": 'error'
    },
    //   语言特性
    languageOptions: {
        parser: tseslint.parser,
        globals: {
            ...globals.node,
        },
        parserOptions: {
            tsconfigRootDir: import.meta.dirname, // commonjs __dirname，esm import.meta.dirname
        },
    },
    // eslint 插件
    plugins: {
        "simple-import-sort": importSort,
    },
});
