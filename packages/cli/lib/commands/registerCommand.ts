import type { Command } from 'commander';
import { program } from 'commander';

type Fn = (p: Command) => Command;

/**
 * @param command 插件命令注册
 */
export function registerCommand(command: Fn) {
    program.addCommand(command(program));
}