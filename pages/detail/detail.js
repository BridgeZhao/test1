var id = "";
Page({
    data: {
    },
    formSubmitHandle: function(e) {
        console.log( e.detail.value)
        if(e.detail.value.tel.length != 11){
            swan.showToast({
                title: '输入正确的电话号码',
                icon: 'loading',
                duration: 1000,
            });
        }else if(e.detail.value.name.length == 0){
             swan.showToast({
                title: '输入正确的姓名',
                icon: 'loading',
                duration: 1000,
            });
        }else if(e.detail.value.msg.length == 0){
             swan.showToast({
                title: '输入留言内容',
                icon: 'loading',
                duration: 1000,
            });
        }else{
            swan.request({
                url: 'https://ht.168jm.cn/wap/index/leave', 
                method: 'GET',
                dataType: 'json',
                data: {
                    name: e.detail.value.name,
                    tel: e.detail.value.tel,
                    intro: e.detail.value.msg,
                    id :id
                },
                header: {
                    'content-type': 'application/json'
                },
                success: function (res) {
                    if(res.data.statusCode = 200){
                        swan.showToast({
                            title: '提交成功！',
                            icon: 'loading',
                            duration: 1000,
                        })
                    }
                },
                fail: function (err) {
                    console.log('错误信息：' + err.errMsg);
                }
            }); 
        }

    },
    formReset: function() {
        console.log('哦豁，form表单被reset了')
    },
    onLoad: function (options) {
        // 监听页面加载的生命周期函数
        id = options.id;
        var that = this
        swan.request({
            url: 'https://ht.168jm.cn/index.php/wap/index/projectInfo', 
            method: 'GET',
            dataType: 'json',
            data: {
                id: id
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                var arr = res.data;
                console.log(arr)
                // var _obj = {};
                // var list = that.data.items;//原有数据
                // console.log(list)
                // for(var i = 0; i < arr.length; i++){//遍历新传数据
                //     list.push(arr[i]);
                // }
                // list.push(arr);
                // _obj = list
                that.setData({
                    msg:arr,
                    current: 0,
                    switchIndicateStatus: true,
                    switchAutoPlayStatus: true,
                    switchDuration: 500,
                    autoPlayInterval: 2000,
                });
            },
            fail: function (err) {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        }); 
    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        // 监听页面显示的生命周期函数
    },
    onHide: function() {
        // 监听页面隐藏的生命周期函数
    },
    onUnload: function() {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function() {
        // 监听用户下拉动作
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    },
    form_show: function(){
        console.log("点击在线咨询")
        swan.pageScrollTo({
            scrollTop: 10000,
            duration: 300
        });
    }
});