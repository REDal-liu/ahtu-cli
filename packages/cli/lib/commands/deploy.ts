
import { program } from 'commander';


export const deploy = program.createCommand('deploy')
    .description('this is deploy...')
    .action(() => {
        console.log('deploy')
    })

