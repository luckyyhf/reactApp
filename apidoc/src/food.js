/**
 * @apiDefine JSONResult
 * @apiSuccess {Boolean} success   True/False
 * @apiSuccess {String} message    Error Message
 * @apiSuccess {Object} data
 */

/**
 * @apiGroup Food
 * @api {get} /food/allFoodsByGPS/:gps  以GPS识别商区并获取食物数据
 * @apiParam (Path Parameters) {String} gps 类似（123.123,80.123）
 * @apiUse JSONResult
 * @apiSuccess {Object} data
 * @apiSuccess {Object[]}   data.businessList
 * @apiSuccess {String}     data.businessList.lastUpdatedStamp
 * @apiSuccess {String}     data.businessList.bid
 * @apiSuccess {String}     data.businessList.name
 * @apiSuccess {String}     data.businessList.address
 * @apiSuccess {String}     data.businessList.phone
 * @apiSuccess {Object}     data.foodsList
 * @apiSuccess {Object[]}   data.foodsList.western
 * @apiSuccess {Object[]}   data.foodsList.chinese
 * @apiSuccess {String}     data.foodsList.chinese.bid
 * @apiSuccess {String}     data.foodsList.chinese.fid
 * @apiSuccess {String}     data.foodsList.chinese.category
 * @apiSuccess {String}     data.foodsList.chinese.type
 * @apiSuccess {String}     data.foodsList.chinese.name
 * @apiSuccess {String}     data.foodsList.chinese.pictureUrl
 * @apiSuccess {String}     data.foodsList.chinese.description
 * @apiSuccess {Number}     data.foodsList.chinese.discount
 * @apiSuccess {Number}     data.foodsList.chinese.price
 * @apiSuccess {String}     data.foodsList.chinese.time
 * @apiSuccess {Number}     data.foodsList.chinese.count
 * @apiSuccess {String}     data.foodsList.chinese.notice
 * @apiSuccess {String}     data.foodsList.chinese.lastUpdatedStamp
 * @apiSuccess {Object[]}   data.foodsList.chinese.tagList
 * @apiSuccess {String}     data.foodsList.chinese.tagList.bid
 * @apiSuccess {String}     data.foodsList.chinese.tagList.fid
 * @apiSuccess {String}     data.foodsList.chinese.tagList.ftid
 * @apiSuccess {String}     data.foodsList.chinese.tagList.lastUpdatedStamp
 * @apiSuccess {String}     data.foodsList.chinese.tagList.name
 * @apiSuccess {String}     data.foodsList.chinese.tagList.description
 */

/**
 * @apiGroup Food
 * @api {get} /food/allFoodsByBid/:bid  以商区id编号获取食物数据
 * @apiParam (Path Parameters) {String} bid 商区的id编号
 * @apiUse JSONResult
 */