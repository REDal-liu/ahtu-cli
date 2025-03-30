import { Command,program } from 'commander';

export function registerCommand(command: Command) {
    // 注册命令
    program.addCommand(command);
}