

import { program } from 'commander';

import { deploy } from './commands/deploy';
import { init } from './commands/init';
import { registerCommand } from './registerCommand';




export function runCLI() {
    program
        .option('--first')
        .option('-s, --separator <char>')
        .argument('<string>');

    // 注册命令
    registerCommand(init);
    registerCommand(deploy);

    //  commander 内置的插件化处理
    program.parse(process.argv);

} 