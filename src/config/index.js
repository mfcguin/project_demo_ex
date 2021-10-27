// 判断当前环境，并加载当前环境下的配置文件
const env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'
const setting = require(`./setting.${env}.config`)
const network = require('./net.config')

module.exports = Object.assign({}, setting, network)
