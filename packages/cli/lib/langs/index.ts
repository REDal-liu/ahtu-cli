
type LANG = Record<string, string>;

const commands_descriptions_zh: LANG = {
    init: '初始化一个新的项目',
    deploy: '部署一个新的项目'
}

const commands_descriptions_en: LANG = {
    init: 'Initialize a new project',
    deploy: 'Deploy a new project'
}

const commands_descriptions: { [key: string]: LANG } = {
    zh_CN: commands_descriptions_zh,
    en_US: commands_descriptions_en
}

const lang = process.env.LANG?.split('.')[0] || 'en_US';
console.log(lang, 'commands_descriptions[lang]')
export default commands_descriptions[lang];