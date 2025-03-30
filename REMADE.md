
# 项目初始化
mkdir my-cli

npm init -y
    修改 package.json
      "type": "module"
      出口入口文件

git init -y

pnpm-workspace.yaml 配置子包管理
  packages:
    - 'packages/*'
    - 'apps/*'

子包饮用其它子包 eg: A 引用 B
    在 A 的 package.json 中添加 
  "dependencies": {
    "B 包名": "workspace:*" // 开发环境直接引用 不指定版本
  }
  随后 pnpm i 即可


npm link 全局链接包 (软链接的形式)
  1. 先在包的根目录下执行 npm link
  2. 此时在项目中使用的是本地的包
  3. 当包更新时，需要重新执行 npm link 包名 来更新本地的包
  4. 当要卸载本地的包时，执行 npm unlink 包名 即可

pnpm workspace 局部链接
  要使用的目录下的package.json 添加
  "script": [
     "ahtu-cli": "ahtu"
  ]
  随后执行 pnpm ahtu 或 ahtu 都可以

### bin 目录下的文件  无后缀 可直接执行 需要 node 版本高于20 低版本可能不支持

*** 脚手架类的项目 最好使用  commonjs 的方式 因为构建的产物一般情况下是需要在 node 下执行 ***

