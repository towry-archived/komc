
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
	var data = expand([], item, 1, true, function (arr, index) {
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

	var data = {
		'page_size': 15,
		'total_row': 60,
		'page_number': 1,
		'collection': collection
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
				'rule_title': 'abc',
				'rule_id': 1
			},
			{
				'rule_title': 'nice',
				'rule_id': 2
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
	
	res.json(end);
});

/**
 * html5_id, info_type
 */
app.get('/statistics/html5topic_graph', function (req, res) {
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


app.get('/statistics/referral', function (req, res) {

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
			}.call(this))
		}
	}

	res.json(end);
});
