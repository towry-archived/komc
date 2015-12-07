
var _ = require('lodash');
var expand = require('komc-util/lib/expand');
var express = require('express');
var app = module.exports = express();

// position list
app.get('/candidate/position/position_list', function (req, res) {
  var data = {
    "status": 0,
    "message": "操作成功",
    "data": {
      "recommend": 3,
      "star": 2,
      "interested": 5,
      "viewernumber": 5,
      "positions": [
        {"title": "客户经理你空间就看空间就", "publish_date": "2014-08-01", "interested": 322235, "viewernumber": 23232328, "status": 0, "position_id": 23},
        {"title": "客户经理", "publish_date": "2014-08-01", "interested": 5, "viewernumber": 8, "status": 0, "position_id": 33},
        {"title": "客户经理", "publish_date": "2014-08-01", "interested": 5, "viewernumber": 8, "status": 0, "position_id": 12},
        {"title": "客户经理", "publish_date": "2014-08-01", "interested": 5, "viewernumber": 8, "status": 0, "position_id": 3},
        {"title": "客户经理讲述了地方的", "publish_date": "2014-08-01", "interested": 3225, "viewernumber": 2328, "status": 0, "position_id": 4},
        {"title": "客户经理", "publish_date": "2014-08-01", "interested": 5, "viewernumber": 8, "status": 0, "position_id": 82}, 
        {"title": "Front end developer", "publish_date": "2014-08-01", "interested": 5, "viewernumber": 8, "status": 0, "position_id": 5}, 
        {"title": "客户老板", "publish_date": "2014-08-01", "interested": 5, "viewernumber": 8, "status": 0, "position_id": 41}
      ]
    }
  };

  res.json(data);
});

// candidate list
app.get('/candidate/list', function (req, res) {
  var item = {
    "candidate_id": 1,
    "wxuser_id": 23,
    "nickname": "哈哈",
    "name":"程志远",
    "is_read": 1, 
    "mobile":"18511295953",
    "email":"tovvry@gmail.com",
    "is_recommend": 0,
    "is_star": 0, 
    "positions": [
      {
        "title": "lsdkjfl",
        "interested": 0,
        "view_time": "2015-10-10 10:00",
        "viewer_number": 32
      }
    ],
    "sharechain":[
        {"nickname":"Chendi", "status": 2, 'headimgurl': 'https://static.moseeker.com/upload/logo/f3048424-83bd-11e5-b44b-00163e003ad7.jpg'},
        {"nickname": "towry▓", "wxuser_id": 23, 'headimgurl': 'https://static.moseeker.com/upload/logo/f3048424-83bd-11e5-b44b-00163e003ad7.jpg'},
        {"nickname": "towry🐶"}
    ]
  };

  var data = {
    "status": 0,
    "message": "操作成功",
    "data": {
      "page_number": 1,
      "page_size": 10,
      "total_size": 10,
      "total_row": 4,     
      "candidates": expand([], item, 10)
    }
  };

  res.json(data);
});

// get remarks
app.get('/candidate/recominfo', function (req, res) {
  var data = {
    "status": 0,
    "message": "操作成功",
    "data": [
      {    
        "employee": {
          "employee_id":1234,
          "nickname": "我是推荐人昵称1",
          "image_url": "http://wx.qlogo.cn/mmopen/UOCHvzUGAIVWibaR1FD7wQCcZFbZc4mbk6N0EIMgdlfPPpC2aGEZHlcq9rl3mSlmQLm7EDpmf9ibvvgppzLP1leIQrVVrxM1SM/0"
        },
        "name": "候选人真实姓名1",
        "company":"千寻移动招聘",
        "position":"物流项�ogistics project engineer",
        "reason":[
          "专业水平高",
          "执行力强",
          "niubility",
          "你好",
          "E家宽",
          "坚实的浪费",
          "使肌肤",
          "会计法律的",
          "绿壳蛋鸡"
        ]
      },
      
      {    
        "employee": {
          "employee_id":1234,
          "nickname": "我是推荐人昵称2",
          "image_url": "http://wx.qlogo.cn/mmopen/UOCHvzUGAIVWibaR1FD7wQCcZFbZc4mbk6N0EIMgdlfPPpC2aGEZHlcq9rl3mSlmQLm7EDpmf9ibvvgppzLP1leIQrVVrxM1SM/0"
        },
        "name": "候选人真实姓名2",
        "company":"千寻移动招聘",
        "position":"物流项�ogistics project engineer",
        "reason":[
          "专业水平高",
          "执行力强"
        ]
      },

      {    
        "employee": {
          "employee_id":134,
          "nickname": "我是推荐人昵称2",
          "image_url": "http://wx.qlogo.cn/mmopen/UOCHvzUGAIVWibaR1FD7wQCcZFbZc4mbk6N0EIMgdlfPPpC2aGEZHlcq9rl3mSlmQLm7EDpmf9ibvvgppzLP1leIQrVVrxM1SM/0"
        },
        "name": "候选人真实姓名2",
        "company":"千寻移动招聘",
        "position":"物流项gistics project engineer",
        "reason":[
        ]
      },
    ]
  };

  res.json(data);
});

app.get('/candidate/:id/suggest_position', function (req, res) {
  var data = {"status": 0, "message": "ok", "data": [
    {"position_id": 2323, "title": "前端开发"},
    {"position_id": 23, "title": "前端a工程师"},
    {"position_id": 23, "title": "前端e工程师"},
    {"position_id": 23, "title": "前端d工程师"}
    ]
  };

  res.json(data);
});

app.get('/candidate/:id', function (req, res) {

  var sharechain = _.fill(new Array(8), {"nickname": "Chendi","status": 0}, 0, 8);
  sharechain[1] = {"nickname": "Abc", "status": 1};
  console.log(sharechain);

  var data = {
    "status": 0,
    "message": "操作成功",
    "data": { 
        "candidate_id": 1,
        "name": "程志远",
        "sharechain": sharechain, 
        "nickname": "小凯",
        "gender": 1,
        "age": 13,
        "mobile": "18511295953",
        "email": "tovvry@gmail.com",
        "is_star": 0,
        "current_company": "haha",
        "current_position": "dddd",
        "education": "cba",
        "degree": "3",
        "graduate": "2014-08-04",
        "remark": "hello world"
    }
  };

  res.json(data);
});


// autosave
// app.post('/candidate', function (req, res) {
//   res.json({
//     status: 0,
//     message: 'ok'
//   });
// });

var data = {"status": 0, "message": "ok", "data": [
  {"position_id": 2323, "title": "前端开发"},
  {"position_id": 23, "title": "前端a工程师"},
  {"position_id": 23, "title": "前端e工程师"},
  {"position_id": 23, "title": "前端d工程师"},
  {"position_id": 23, "title": "前端2工程师"},
  {"position_id": 23, "title": "前端3工程师"},
  {"position_id": 23, "title": "前端4工程师"},
  {"position_id": 23, "title": "前端5工程师"},
  {"position_id": 23, "title": "前端6工程师"},
  {"position_id": 23, "title": "前端7工程师"},
  {"position_id": 23, "title": "前端8工程师"},
  {"position_id": 23, "title": "前端9工程师"},
  {"position_id": 200, "title": "就是束带结发"},
  {"position_id": 221, "title": "了解啥地方"},
  {"position_id": 11, "title": "哈哈"}
]};

app.get('/candidate/position/title_list', function (req, res) {
  res.json(data);
});


// 2015-11-23 00:00:00
