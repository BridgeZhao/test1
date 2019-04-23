/**
 * @file demo page for component
 * @author lvlei
 */
/* globals Page, swan */
var i = 1;
Page({
     data: {
         items: [{

    //         img: '../../images/logo111.jpeg',
    //         name: '斗牛士西餐厅',
    //         company_name: '上海斗牛士餐饮管理有限公司',
    //         shop_number:'96',
    //         invest_money:'20-50万',
    //         id:'detail'
    //     }, {
    //         img: '../../images/1.jpg',
    //         name: '斗牛士西餐厅',
    //         company_name: '上海斗牛士餐饮管理有限公司',
    //         shop_number:'96',
    //         invest_money:'20-50万',
    //         id:'detail'
    //     }, {
    //         img: '../../images/1.jpg',
    //         name: '斗牛士西餐厅',
    //         company_name: '上海斗牛士餐饮管理有限公司',
    //         shop_number:'96',
    //         invest_money:'20-50万',
    //         id:'detail'
         }]
     },
    onLoad: function () {
        var that = this;
        swan.request({
            url: 'https://ht.168jm.cn/wap/index/projectApi', 
            method: 'GET',
            dataType: 'json',
            data: {
                p: '1'
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                var arr = res.data;
                console.log(arr)
                that.setData({
                    items:arr
                })
            },
            fail: function (err) {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        }); 
	},
    // 点击加载更多
    oneItemClick: e => { 
        let id = e.currentTarget.dataset.id;
        swan.navigateTo({
            url: '/pages/detail/detail?id='+id
        });
    },
    loadMore: function () {
        console.log('加载更多被点击');
        var that = this;
        i++
        swan.request({
            url: 'https://ht.168jm.cn/wap/index/projectApi', 
            method: 'GET',
            dataType: 'json',
            data: {
                p: i
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                var arr = res.data;
                var _obj = {};
                var list = that.data.items;//原有数据
                console.log(list)
                for(var i = 0; i < arr.length; i++){//遍历新传数据
                    list.push(arr[i]);
                }
                _obj = list
                that.setData({
                    items:_obj
                });
            },
            fail: function (err) {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        }); 
    }
});

