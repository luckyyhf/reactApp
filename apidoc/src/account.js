/**
 * @apiDefine JSONResult
 * @apiSuccess {Boolean} success   True/False
 * @apiSuccess {String} message    Error Message
 * @apiSuccess {Object} data
 */

/**
 * @apiDefine LoginParam
 * @apiParam {String} username 你的用户名
 * @apiParam {String} password 你的密码
 */

/**
 * @apiGroup Account
 * @api {POST} /account/register 注册一个新的账户
 * @apiUse LoginParam
 * @apiParam {Boolean} accept 是否接受条款
 * @apiUse JSONResult
 */

/**
 * @apiGroup Account
 * @api {POST} /account/login 登录
 * @apiUse LoginParam
 * @apiParam {Boolean} autoLogin 是否自动登录
 * @apiUse JSONResult
 */