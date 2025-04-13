

import { program } from 'commander';

import './commands/index';




export function runCLI() {
    program
        .option('--first')
        .option('-s, --separator <char>')
        .argument('<string>');

    // 先创建 再追加
    // const createCommand = program.createCommand('init')
    //     .description('初始化项目')
    //     .action(() => {
    //         console.log('init command');
    //     });
    // program.addCommand(createCommand);

    program.parse();
}