
import { build } from './base/build';
import { create } from './base/create';
import { info } from './base/info';
import { preview } from './base/preview';
import { serve } from './base/serve';
import { registerCommand } from './registerCommand';


// 注册 build 命令
registerCommand(build)

// 注册 create 命令
registerCommand(create)

// 注册 info 命令
registerCommand(info)

// 注册 preview 命令
registerCommand(preview)

// 注册 serve 命令
registerCommand(serve)