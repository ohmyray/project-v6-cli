'use strict';

const path = require('path');
const fs = require('fs');

// 缓存路径
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// 获取配置对象
let configs = {};
const configFiles = fs.readdirSync(appDirectory + '/config/', "utf-8");
configFiles.forEach(pathO => {
    const type = `${pathO.split('.',1)}`;
    const current = {};
    const config = JSON.parse(fs.readFileSync(appDirectory + '/config/' + pathO, "utf8"));
    for (const key in config) {
        if (config.hasOwnProperty(key)) current[key] = path.join(appDirectory, 'module', type, config[key]);
    }
    configs[type] = current;
})

module.exports = {
    dotenv: resolveApp('.env'),
    appPath: resolveApp('.'),
    appBuild: resolveApp('build'),
    appPublic: resolveApp('public'),
    appExamples: resolveApp('html'),
    appHtml: resolveApp('html/index.html'),
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp('src'),
    appTsConfig: resolveApp('tsconfig.json'),
    appJsConfig: resolveApp('jsconfig.json'),
    yarnLockFile: resolveApp('yarn.lock'),
    appNodeModules: resolveApp('node_modules'),
    ...configs
};