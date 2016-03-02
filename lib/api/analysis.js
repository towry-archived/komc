
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

	var data = {
		'status': 0,
		'message': 'success',
		'data': {
			'jd_pv': r(20098),
			'recom_jd_pv': r(42352),
			'jd_uv': r(232),
			'recom_jd_uv': r(523),
			'interests': r(235),
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

	var item = {
		'date': '03-33',
		'b_data': null,
		'g_data': null
	};

	var monthDay = 1;
	var data = expand([], item, 3, true, function (arr, index) {
		var item = arr[index];
		var monthDayStr = monthDay >= 10 ? monthDay : '0' + monthDay;
		item.date = '2015/03/' + monthDayStr;
		item.b_data = r(300);
		item.g_data = r(300);
		monthDay += r(3,1);
	});

	data = [{"date": "2016/01/01", "g_data": 12, "b_data": 33}, {"date": "2016/01/02", "g_data": 7, "b_data": 15}, {"date": "2016/01/03", "g_data": 6, "b_data": 8}, {"date": "2016/01/04", "g_data": 4, "b_data": 4}]

	var end = {
		'status': 0,
		'message': 'ok',
		'data': data
	};

	res.json(end);
});

/*
req: {
  *'info_type':1, # 1: 本周, 2:上周, 3: 本月, 4: 历史月份
  'month': "YYYY-MM",
  'title': '人力资源主管',
  'sort': 'jd_uv', #列名
  *'page_size': 15
  *'page_number': 1
}
*/

app.get('/statistics/recruit_position_table', function (req, res) {

	var single = {
		'date': 'MM-DD',
		'jd_pv': 1,
		'recom_jd_pv': 1,
		'jd_uv': 1, // #浏览人数
		'recom_jd_uv': 1, // #浏览人数推荐量
		'interests': 1,
		'recom_interests': 1,
		'interests_unique': 1, // #感兴趣人数
		'recom_interests_unique': 1, // #感兴趣人数推荐量
		'mobile': 1, // #留手机的人数
		'recom_mobile': 1, // #留手机的人数推荐量
		'apply': 1, 
		'recom_apply': 1, 
		'apply_unique': 1, // #申请人数
		'recom_apply_unique': 1, // #申请人数推荐量
		'review_passed': 1, // #评审通过人数
		'recom_review_passed': 1, // #评审通过人数推荐量
		'interview_passed': 1, // #面试通过人数
		'recom_interview_passed': 1, // #面试通过人数推荐量
		'on_board': 1, // #入职人数
		'recom_on_board': 1, // #入职人数推荐量,
		'title': '人力资源部'
	};

	function randomMonth () {
		var m = r(12);
		var d = r(30);
		return (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
	}

	var collection = expand([], single, 10, true, function (arr, index) {
		var item = arr[index];
		item.date = randomMonth();
		item.jd_pv = r(300),
		item.recom_jd_pv = r(300),
		item.jd_uv = r(300),
		item.recom_jd_uv = r(300);
		item.interests = r(300);
		item.recom_interests = r(300);
		item.interests_unique = r(300);
		item.recom_interests_unique = r(300);
		item.mobile = r(300);
		item.recom_mobile = r(300);
		item.apply = r(300);
		item.recom_apply = r(300);
		item.apply_unique = r(300);
		item.recom_apply_unique = r(300);
		item.review_passed = r(300);
		item.recom_review_passed = r(300);
		item.interview_passed = r(300);
		item.recom_interview_passed = r(300);
		item.on_board = r(300);
		item.recom_on_board = r(300);
	});


	var d = [{"recom_jd_uv": 2, "jd_uv": 3, "recom_on_board": 0, "recom_review_passed": 0, "recom_apply_unique": 0, "title": "\u5e73\u9762\u8bbe\u8ba1\u5e08", "mobile": 0, "interests_unique": 0, "recom_mobile": 0, "interests": 0, "on_board": 0, "apply_unique": 0, "review_passed": 0, "recom_jd_pv": 4, "recom_apply": 0, "apply": 0, "jd_pv": 7, "recom_interview_passed": 0, "interview_passed": 0, "recom_interests": 0, "recom_interests_unique": 0}, {"recom_jd_uv": 3, "jd_uv": 4, "recom_on_board": 0, "recom_review_passed": 0, "recom_apply_unique": 0, "title": "\u4ea7\u54c1\u8fd0\u8425\u7ecf\u7406", "mobile": 0, "interests_unique": 0, "recom_mobile": 0, "interests": 0, "on_board": 0, "apply_unique": 0, "review_passed": 0, "recom_jd_pv": 4, "recom_apply": 0, "apply": 0, "jd_pv": 5, "recom_interview_passed": 0, "interview_passed": 0, "recom_interests": 0, "recom_interests_unique": 0}, {"recom_jd_uv": 2, "jd_uv": 2, "recom_on_board": 0, "recom_review_passed": 0, "recom_apply_unique": 0, "title": "\u5927\u5ba2\u6237\u9500\u552e\uff08\u5317\u4eac\uff09", "mobile": 0, "interests_unique": 0, "recom_mobile": 0, "interests": 0, "on_board": 0, "apply_unique": 0, "review_passed": 0, "recom_jd_pv": 4, "recom_apply": 0, "apply": 0, "jd_pv": 4, "recom_interview_passed": 0, "interview_passed": 0, "recom_interests": 0, "recom_interests_unique": 0}, {"recom_jd_uv": 1, "jd_uv": 1, "recom_on_board": 0, "recom_review_passed": 0, "recom_apply_unique": 0, "title": "\u8fd0\u7ef4\u5de5\u7a0b\u5e08", "mobile": 0, "interests_unique": 0, "recom_mobile": 0, "interests": 0, "on_board": 0, "apply_unique": 0, "review_passed": 0, "recom_jd_pv": 4, "recom_apply": 0, "apply": 0, "jd_pv": 4, "recom_interview_passed": 0, "interview_passed": 0, "recom_interests": 0, "recom_interests_unique": 0}, {"recom_jd_uv": 0, "jd_uv": 2, "recom_on_board": 0, "recom_review_passed": 0, "recom_apply_unique": 0, "title": "\u524d\u53f0\u884c\u653f", "mobile": 0, "interests_unique": 0, "recom_mobile": 0, "interests": 0, "on_board": 0, "apply_unique": 0, "review_passed": 0, "recom_jd_pv": 0, "recom_apply": 0, "apply": 0, "jd_pv": 2, "recom_interview_passed": 0, "interview_passed": 0, "recom_interests": 0, "recom_interests_unique": 0}, {"recom_jd_uv": 0, "jd_uv": 2, "recom_on_board": 0, "recom_review_passed": 0, "recom_apply_unique": 0, "title": "\u5ba2\u670d\u5b9e\u4e60", "mobile": 0, "interests_unique": 0, "recom_mobile": 0, "interests": 0, "on_board": 0, "apply_unique": 0, "review_passed": 0, "recom_jd_pv": 0, "recom_apply": 0, "apply": 0, "jd_pv": 2, "recom_interview_passed": 0, "interview_passed": 0, "recom_interests": 0, "recom_interests_unique": 0}, {"recom_jd_uv": 1, "jd_uv": 1, "recom_on_board": 0, "recom_review_passed": 0, "recom_apply_unique": 0, "title": "\u5185\u5bb9\u8fd0\u8425\uff08\u6587\u6848\uff09", "mobile": 0, "interests_unique": 0, "recom_mobile": 0, "interests": 0, "on_board": 0, "apply_unique": 0, "review_passed": 0, "recom_jd_pv": 1, "recom_apply": 0, "apply": 0, "jd_pv": 1, "recom_interview_passed": 0, "interview_passed": 0, "recom_interests": 0, "recom_interests_unique": 0}, {"recom_jd_uv": 0, "jd_uv": 1, "recom_on_board": 0, "recom_review_passed": 0, "recom_apply_unique": 0, "title": "\u5927\u5ba2\u6237\u9500\u552e\uff08\u5e7f\u5dde\uff09", "mobile": 0, "interests_unique": 0, "recom_mobile": 0, "interests": 0, "on_board": 0, "apply_unique": 0, "review_passed": 0, "recom_jd_pv": 0, "recom_apply": 0, "apply": 0, "jd_pv": 1, "recom_interview_passed": 0, "interview_passed": 0, "recom_interests": 0, "recom_interests_unique": 0}];

	var data = {
		'page_size': 15,
		'total_row': 60,
		'page_number': 1,
		'collection': d
	};
	var end = {
		'status': 0,
		'message': 'ok',
		'data': data
	};

	res.json(end);
});


// wexin page
app.get('/statistics/wxrule/', function (req, res) {
	var end = {
		'status': 0,
		'message': 'ok',
		'data': [
			{
				'text': '你好啊啊',
				'rule_id': 1
			},
			{
				'text': '嗯，很不错嘛',
				'rule_id': 2
			},
			{
				'text': '不错不错哈哈哈哈哈哈哈哈哈',
				'title': '这是一个分类',
				'rule_id': 3
			}
		]
	}

	res.json(end);
});

app.get('/statistics/wxrule_graph', function (req, res) {
	var item = {
		'date': '03-33',
		'b_data': null,
		'g_data': null
	};

	var monthDay = 1;
	var data = expand([], item, 30, true, function (arr, index) {
		var item = arr[index];
		var monthDayStr = monthDay > 10 ? monthDay : '0' + monthDay;
		item.date = '2015/03/' + monthDayStr;
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


/**
 * from_date, to_date
 */

app.get('/statistics/html5topic', function (req, res) {
	var end = {
		'status': 0,
		'message': 'ok',
		'data': [
			{
				'topic_id': 1,
				'title': '仟寻喊你来上班!',
				'img_url': '../../../../common/images/retangle_project.png',
				'digest': '7月31日上海站，仟寻移动招聘诚邀您参加7月31日上海站，仟寻移动招聘诚邀您参加'
			},
			{
				'topic_id': 2,
				'title': '仟寻喊你来上班!',
				'img_url': '../../../../common/images/retangle_project.png',
				'digest': '7月31日上海站，仟寻移动招聘诚邀您参加7月31日上海站，仟寻移动招聘诚邀您参加'
			},
			{
				'topic_id': 3,
				'title': '仟寻喊你来上班!',
				'img_url': '../../../../common/images/retangle_project.png',
				'digest': '7月31日上海站，仟寻移动招聘诚邀您参加7月31日上海站，仟寻移动招聘诚邀您参加'
			},
			{
				'topic_id': 4,
				'title': '仟寻喊你来上班!',
				'img_url': '../../../../common/images/retangle_project.png',
				'digest': '7月31日上海站，仟寻移动招聘诚邀您参加7月31日上海站，仟寻移动招聘诚邀您参加'
			},
			{
				'topic_id': 5,
				'title': '仟寻喊你来上班!',
				'img_url': '../../../../common/images/retangle_project.png',
				'digest': '7月31日上海站，仟寻移动招聘诚邀您参加7月31日上海站，仟寻移动招聘诚邀您参加'
			},
			{
				'topic_id': 6,
				'title': '仟寻喊你来上班!',
				'img_url': '../../../../common/images/retangle_project.png',
				'digest': '7月31日上海站，仟寻移动招聘诚邀您参加7月31日上海站，仟寻移动招聘诚邀您参加'
			}
		]
	};

	// end.data = [];

	res.json(end);
});

/**
 * html5_id, info_type
 */
app.get('/statistics/html5topic_graph', function (req, res) {
	var item = {
		'date': '03-33',
		'b_data': null,
		'g_data': null,
		'recom_b_data': null,
		'recom_g_data': null
	};

	var monthDay = 1;
	var data = expand([], item, 30, true, function (arr, index) {
		var item = arr[index];
		var monthDayStr = monthDay > 10 ? monthDay : '0' + monthDay;
		item.date = '2015/03/' + monthDayStr;
		item.b_data = r(300, 100);
		item.g_data = r(300, 100);
		item.recom_b_data = r(100);
		item.recom_g_data = r(100);
		monthDay += 1;
	});

	var end = {
		'status': 0,
		'message': 'ok',
		'data': data
	};
	
	res.json(end);
});


// get childaccount
app.get('/account/superaccount/childaccount', function (req, res) {
	var data = [
		{
			'id': 1,
			'username': '刘伟未',
			'mobile': 18511295963,
			'activation': 0,
		},
		{
			'id': 2,
			'username': '张阵阵',
			'mobile': 13292832232,
			'activation': 1,
		},
		{
			'id': 3,
			'username': '沈恳恳',
			'mobile': 12023242343,
			'activation': 0
		},
		{
			'id': 4,
			'username': '就卡卡',
			'mobile': 19823242343,
			'activation': 0
		}
	];

	res.json({
		'status': 0,
		'message': 'ok',
		'data': data
	});
});


app.get('/statistics/referral', function (req, res) {

	var tableType = req.query.table_type || null;
	var info_type = req.query.info_type || null;

	var names = ["towry", "刘老师", "陈老师", "tangm", "yiliang", "大启"];
	var jobs = ['JavaScript工程师', 'Java工程师', 'C++工程师', '产品经理', 'UI设计师', 'UX设计师'];
	var total = 30;

	function item () {

		return {
				'date': '2015/12/1',
				'employee_name': names[r(5,0)],
				'position_title': jobs[r(5,0)],
				'recom_jd_uv': r(20),
				'recom_interests_unique': r(20), 
				'recom_mobile': r(20),
				'recom_apply_unique': r(20),
				'recom_review_passed': r(20), 
				'recom_interview_passed': r(20), 
				'recom_on_board': r(20), 
			};
	}

	var end = {
		'status': 0,
		'message': 'ok',
		'data': {
			'page_size': 1,
			'total_row': 1,
			'page_number': 1,
			'collection': (function () {
				var pu = [];
				for (var i = 0; i < total; i++) {
					pu.push(item());
				}

				return pu;
			}.call(this)),
			'ordered_key': [],
		}
	}

	end.data.ordered_key = getOrderKey(tableType === '1' ? 'employee_name' : 'position_title', end);

	function getOrderKey (k, what) {
		k = k || 'employee_name';

		var ret = [];
		
		var collection = what.data.collection;
		var name = collection.map(function (item) {
			return item[k];
		});

		name.forEach(function (item) {
			if (ret.indexOf(item) === -1) {
				ret.push(item);
			}
		});

		// mess the order
		swap(0, ret.length - 1, ret);
		swap(1, ret.length - 2, ret);

		return ret;
	}

	function swap (a, b, c) {
		var d = c[a];
		c[a] = c[b];
		c[b] = d;
	}


	res.json(end);
});
