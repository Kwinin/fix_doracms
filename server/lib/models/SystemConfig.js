/**
 * Created by Administrator on 2015/4/15.
 * 数据操作记录
 */
var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;


var SystemConfigSchema = new Schema({
    _id: {
        type: String,
        
        'default': shortid.generate
    },
    date: { type: Date, default: Date.now },
    siteName: { type: String, default: '文创产业交流平台' },
    siteDomain: { type: String, default: 'http://www.crainty.com' },
    siteDiscription: { type: String, default: '创新创意' },
    siteKeywords: String,
    siteEmailServer: String,
    siteEmail: String,
    siteEmailPwd: String,
    registrationNo: { type: String, default: '' },
    mongodbInstallPath: String,
    databackForderPath: String
});

var SystemConfig = mongoose.model("SystemConfig", SystemConfigSchema);

module.exports = SystemConfig;

