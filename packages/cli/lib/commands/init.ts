
import { program } from 'commander';


export const init = program.createCommand('init')
    .description('this is init...')
    .action(() => {
        console.log('init')
    })