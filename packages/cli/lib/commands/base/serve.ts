import type { Command } from "commander";
import { spawn } from 'node:child_process';

import { hasPnpm } from '../../utils/env';


export const serve = (program: Command): Command => {
    const serveCommand = program.createCommand('serve')
        .description('serve 项目')
        .action(() => {
            console.log('serve command');
            const _hasPnpm = hasPnpm();
            const [cmd, ...args] = _hasPnpm ? ['pnpm', 'dev'] : ['npm', 'run', 'dev'];
            // 启动子进程
            const child = spawn(cmd, args, {
                cwd: process.cwd(),
                stdio: 'inherit',
                shell: true  // 在Windows上可能需要shell: true
            });
            // 监听这个子进程的关闭事件
            child.on('close', (code) => {
                process.exit(code);
            });
        });

    return serveCommand;
}