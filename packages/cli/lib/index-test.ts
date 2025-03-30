
// import init from './commands/init';
// import deploy from './commands/deploy';

const init = () => console.log('init');
const deploy = () => console.log('deploy');

const commands = new Map<string, () => void>();

export function runCLI() {
    // process.argv 获取输入的参数
    const argv = process.argv.slice(2);
    const command = argv[0];
    // console.log('this is run cli file...222', argv)


    function registerCommand(command: string, action: () => void) {
        commands.set(command, action);
    }

    registerCommand('init', init);
    registerCommand('deploy', deploy);


    const action = commands.get(command);
    console.log(command, '== command ==', action)

    if (action) {
        action();
    } else {
        console.log('Command not found');
    }


} 