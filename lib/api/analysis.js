
// var _ = require('lodash');
var expand = require('komc-util/lib/expand');
var express = require('express');
var app = module.exports = express();

// http://wiki.moseeker.com/data-statistics.md

function random (max, min) {
	min = min || 1;
	return Math.floor(Math.random() * max + min);
}

function r (max, min) {
	return random(max, min);
}

app.get('/analysis/all', function (req, res) {
	res.json({
		data: [1,2,3]
	})
});

// info_type&month
app.get('/statistics/recruit', function (req, res) {

	console.log(req.query);

	var data = {
		'status': 0,
		'message': 'success',
		'data': {
			'jd_pv': r(20098),
			'recom_jd_pv': r(42352),
			'jd_uv': r(232),
			'recom_jd_uv': r(523),
			'insterests': r(235),
			'recom_interests': r(555),
			'interests_unique': r(555), 
			'recom_interests_unique': r(555), 
			'mobile': r(555), 
			'recom_mobile': r(555), 
			'apply': r(555), 
			'recom_apply': r(555), 
			'apply_unique': r(555), 
			'recom_apply_unique': r(555), 
			'review_passed': r(555), 
			'recom_review_passed': r(555), 
			'interview_passed': r(555), 
			'recom_interview_passed': r(555), 
			'on_board': r(555), 
			'recom_on_board': r(555)
		}
	}

	res.json(data);
});


// graph
/*
req: {
  *'info_type':1, # 1: 本周, 2:上周, 3: 本月, 4: 历史月份
  'month': "YYYY-MM",
  *'data_type': 'jd_pv'.... 
}
*/
app.get('/statistics/recruit_graph', function (req, res) {
	console.log(req.query);

	var item = {
		'date': '03-33',
		'b_data': null,
		'g_data': null
	};

	var monthDay = 1;
	var data = expand([], item, 30, true, function (arr, index) {
		var item = arr[index];
		var monthDayStr = monthDay > 10 ? monthDay : '0' + monthDay;
		item.date = '03-' + monthDayStr;
		item.b_data = r(300);
		item.g_data = r(300);
		monthDay += 1;
	});

	var end = {
		'status': 0,
		'message': 'ok',
		'data': data
	};

	res.json(end);
});
