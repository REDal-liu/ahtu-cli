import type { Command } from "commander";
import prompts from "prompts";

import { loadTemplate } from "../../utils/loadTemplate";

type CreateCommandOptions = {
    /**
     * 选择项目类型 vue react ...
     */
    frameWork?: string;
    /**
     * 选择模板 vue-ts react-ts...
     */
    template?: string;
    /**
     * 选择远程模板
     */
    remote?: string;
}

export const create = (program: Command): Command => {
    return program.createCommand('create')
        .argument('<project-name>', '项目名称')
        .option('-f, --frameWork <frameWork>', '选择项目类型 vue react...')
        .option('-t, --template <template>', '选择模板 vue-ts react-ts...')
        .option('-r, --remote <remote>', '选择远程模板')
        .description('create 项目')
        .action(async (projectName: string, options: CreateCommandOptions) => {
            let { frameWork = 'react', template = 'react-ts' } = options;
            const { remote = false } = options;

            if (remote) {
                console.log('remote 加载远程模版...', remote);
                loadTemplate({
                    projectName,
                    template,
                    remote: true
                })
                return;
            }

            if (!frameWork) {
                const frameWordResponse = await prompts([{
                    type: 'select',
                    name: 'frameWork',
                    message: '请选择项目类型',
                    choices: [
                        { title: 'Vue3', value: 'vue3' },
                        { title: 'React', value: 'react' },
                    ],
                }])

                frameWork = frameWordResponse.frameWork;
            }

            if (!template) {
                const templateResponse = await prompts([
                    {
                        type: 'select',
                        name: 'template',
                        message: '请选择模板',
                        choices: [
                            { title: 'Vue3', value: 'vue3' },
                            { title: 'React', value: 'react' },
                        ],
                    }
                ])

                template = templateResponse.template;
            }
            loadTemplate({
                projectName,
                template,
                // remote
                // framwork,
            })
            console.log('create command', projectName, template);
        });

}