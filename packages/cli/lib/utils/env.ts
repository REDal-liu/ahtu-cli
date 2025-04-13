import { execSync } from 'node:child_process';


export function hasPnpm() {
    return !!getPnpmVersion();
}


export function getPnpmVersion() {
    // 判断是否有 pnpm 命令 
    let _pnpmVersion;
    try {
        _pnpmVersion = execSync('pnpm -v', { stdio: 'pipe' }).toString().trim();
    } catch (e) {
        _pnpmVersion = undefined;
        console.log(e, '_pnpmVersion');
    }

    return _pnpmVersion;
}