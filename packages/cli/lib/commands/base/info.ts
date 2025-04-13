import type { Command } from 'commander';
import pc from 'picocolors';

import pkg from '../../../package.json';
import { logger } from '../../utils/logger';


export const info = (program: Command): Command => {

    return program
        .createCommand('info')
        .description('info 项目')
        .action(() => {
            logger.log(pc.bgGreen(`Product: ahtu CLI v${pkg.version}`));
            logger.log(pc.green(`Author: ahtu`));
            logger.log(pc.underline('Website: https://www.baidu.com'));
        });

}