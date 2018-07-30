/**
 * Created by Administrator on 2015/4/15.
 * 管理员对象
 */
var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;

var AdminGroup = require('./AdminGroup');

var AdminUserSchema = new Schema({
    id: String,
    _id: {
        type: String,
        
        'default': shortid.generate
    },//管理员id
    name: String,//昵称
    userName: String,//用户名
    password: String,//密码
    email: String,//邮箱
    phoneNum: Number,//电话号码
    comments: String,//个性签名
    date: { type: Date, default: Date.now },//添加日期
    logo: { type: String, default: "/upload/images/defaultlogo.png" },//头像
    enable: { type: Boolean, default: false },//用户是否有效
    auth: { type : Boolean ,default :false},//是否是作者
    group: {
        type: String,
        ref: 'AdminGroup'
    }//分组
});

AdminUserSchema.statics = {

    getOneItem: function (res, targetId, callBack) {
        AdminUser.findOne({ '_id': targetId }).populate('group').exec(function (err, user) {
            if (err) {
                res.end(err);
            }
            callBack(user);
        })
    }

};


var AdminUser = mongoose.model("AdminUser", AdminUserSchema);

module.exports = AdminUser;

