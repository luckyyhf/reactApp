// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义

module.exports = {
	//'GET /apps/takeOut/business': 'http://192.168.1.106:8080/apps/takeOut/business',

	//'GET /apps/takeOut/allFoods': 'http://192.168.1.106:8080/apps/takeOut/allFoods',

	'/api/homepage/carousel': function (req, res) {
		setTimeout(function () {
			res.json({
				success: true,
				data: ['http://o8ea97cbs.bkt.clouddn.com/cai1.png',
					'http://o8ea97cbs.bkt.clouddn.com/egg1.jpg',
					'http://o8ea97cbs.bkt.clouddn.com/meishi3.png'],
			});
		}, 200);
	},

	'/api/test': function (req, res) {
		setTimeout(function () {
			res.json({
				success: true,
				data: {
					userDetail: {
						username: 'aaa',
						password: 'bbb',
					}
				},
			});
		}, 2000);
	},
};
