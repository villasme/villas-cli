#!/usr/bin/env node --harmony
'use strict'
 
process.env.NODE_PATH = __dirname + '/../node_modules/'
 
const program = require('commander')
const template = require('../template.json')
const templateName = Object.keys(template.tpl).join('|')
 
program
    .version(require('../package').version)
 
program
    .usage('<command>')
 
program
    .command('add')
    .description('添加一个工程模板信息')
    .alias('a')
    .action(() => {
        require('../command/add')()
    })
 
program
    .command('list')
    .description('查看工程模板信息')
    .alias('l')
    .action(() => {
        require('../command/list')()
    })
 
program
    .command('init')
    .description(`初始化工程,   templateName: ${templateName}`)
    .alias('i')
    .action(() => {
        require('../command/init')()
    })
 
program
    .command('delete')
    .description('删除一个模板信息')
    .alias('d')
    .action(() => {
        require('../command/delete')()
    })
 
program.parse(process.argv)
 
if (!program.args.length) {
    program.help()
}
