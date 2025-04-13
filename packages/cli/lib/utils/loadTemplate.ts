import { copy, readJSON, writeJSON } from 'fs-extra';
import { downloadTemplate } from 'giget';
import path from 'node:path';
import ora from 'ora';


export type loadLocalTemplateOptions = {
    projectName: string;
    template: string;
}


export type loadRemotTemplateOptions = {
    projectName: string;
}

export type loadTemplateOptions = {
    remote?: boolean;
} & loadLocalTemplateOptions & loadRemotTemplateOptions;

/**
 * 修改 package.json 的 name
 */
export const generatePackageJson = async (projectName: string) => {
    const targetPath = path.resolve(process.cwd(), projectName);

    const originalPkg = await readJSON(path.join(targetPath, 'package.json'));
    originalPkg.name = projectName;
    originalPkg.version = '1.0.0';
    await writeJSON(path.join(targetPath, 'package.json'), originalPkg, {
        spaces: 4,
    });
}


// 远程方式
export const loadRemotTemplate = async (options: loadRemotTemplateOptions) => {

    const spinner = ora({
        text: '下载模板中...',
        color: 'green',
    }).start();
    // 1 先预设好远程模版
    const base_url = 'https://codeload.github.com/design-sparx/antd-multipurpose-dashboard/tar.gz/refs/heads/main'
    const { dir } = await downloadTemplate(base_url, {
        dir: `${process.cwd()}/${options.projectName}`,
    })
    console.log(dir, 'dir')
    generatePackageJson(options.projectName);
    spinner.succeed('下载模板成功');
    // 2 根据选择来匹配远程模版
    // 3 执行远程模版的拉去
    // 4 执行模版的复制以及一些基础的处理


}


// 本地方式
export const loadLocalTemplate = async (options: loadLocalTemplateOptions) => {
    const { projectName, template } = options;
    // 1 先预设好本地模版
    // 2 根据选择来匹配本地模版

    // 3 执行模版

    // 3.1 模版内容拷贝到当前命令执行的路径下
    // 3.2 把模版 package.json 的 name 换成 用户输入的名字
    const spinner = ora({
        text: '下载模板中...',
        color: 'green',
    }).start();
    const templatePath = path.join(__dirname, `../templates/template-${template}`);
    const targetPath = path.resolve(process.cwd(), projectName);

    // 如果 targetPath 存在 则提示 项目已存在 或者 覆盖
    await copy(templatePath, targetPath)
    generatePackageJson(projectName);
    spinner.succeed('下载模板成功');

}


// 上层抽象
export const loadTemplate = async (options: loadTemplateOptions) => {


    const { remote, projectName, template } = options;
    console.log(options, '上层抽象')
    // 如果是远程模版 则直接加载远程模版
    if (remote) {
        return loadRemotTemplate({ projectName });
    }

    return loadLocalTemplate({ projectName, template });

}