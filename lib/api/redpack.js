var express = require('express');
var app = module.exports = express();

app.get('/weixin/rp/activity', function (req, res) {
	var data = {
		"status": 0,
		"message": "操作成功",
		"data": {

		}
	};

	res.json(data);
})
