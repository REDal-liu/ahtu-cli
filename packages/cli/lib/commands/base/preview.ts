import type { Command } from "commander";



export const preview = (program: Command): Command => {
    const previewCommand = program.createCommand('preview')
        .description('preview 项目')
        .action(() => {
            console.log('preview command');
        });

    return previewCommand;
}