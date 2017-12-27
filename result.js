var bmap = require('/libs/bmap-wx.js');
var wxMarkerData = [];
var BMap = new bmap.BMapWX({
            ak: 'Yn4Kp9XqM7Bd0dnFmH80U9hm8FBGwgOg'
        });
var windowWidth = 0;
Page({
    data: {
        markers: [],
        latitude: '',
        longitude: '',
        placeData: {},
        sugData: [],
        text: '',
        show: true,
        flongitude: '',
        flatitude: '',
        ftext: '',
        location: {},
        seed: 0
    },
    makertap: function(e) {
        var that = this;
        var id = e.markerId;
        that.showSearchInfo(wxMarkerData, id);
        that.changeMarkerColor(wxMarkerData, id);
    },
    onReady: function(e) {
        this.mapCtx = wx.createMapContext('map');
    },
    onLoad: function(q) {
        var that = this;
        that.setData({
            seed: q.seed
        });
        //console.log(q.seed);
        var fail = function(data) {
            console.log(data)
        };
        var success = function(data) {
            wxMarkerData = data.wxMarkerData;
            //console.log(data);
            that.setData({
                markers: wxMarkerData
            });
            that.setData({
                latitude: wxMarkerData[0].latitude
            });
            that.setData({
                longitude: wxMarkerData[0].longitude
            });
            that.showSearchInfo(wxMarkerData, q.seed % 20);
            that.changeMarkerColor(wxMarkerData, q.seed % 20);
        }
        wx.getSystemInfo({
            success: function(res) {
                console.log(res.windowWidth)
                console.log(res.windowHeight)
                windowWidth = res.windowWidth;
                BMap.search({
                    "query": '美食',
                    fail: fail,
                    page_size: 20,
                    scope: 2,
                    success: success,
                    iconPath: '../../img/marker_red.png',
                    iconTapPath: '../../img/marker_red.png',
                    width: res.windowWidth / 15,
                    height: res.windowWidth / 15
                });
            }
        });
    },
    showSearchInfo: function(data, i) {
        var that = this;
        that.setData({
            placeData: {
                title: '名称：' + data[i].title + '\n',
                address: '地址：' + data[i].address + '\n',
                telephone: '电话：' + data[i].telephone + '\n',
                price: '价格：' + data[i].price
            }
        });
    },
    changeMarkerColor: function(data, id) {
        var that = this;
        var markersTemp = [];
        for (var i = 0; i < data.length; i++) {
            if (i === id) {
                data[i].iconPath = "../../img/marker_yellow.png";
            } else {
                data[i].iconPath = "../../img/marker_red.png";
            }
            markersTemp[i] = data[i];
        }
        that.setData({
            markers: markersTemp
        });
    },
    bindKeyInput: function(e) {
        var that = this;
        if (e.detail.value === '') {
            that.setData({
                sugData: [],
                show: true
            });
            return;
        }
        var fail = function(data) {
            console.log(data)
        };
        var success = function(data) {
            var sugData =  [];
            var j = 0;
            var flongitude = null;
            var flatitude = null;
            var ftext = null;
            //console.log(data.result);
            for(var i = 0; i < data.result.length; i++) {
                if(data.result[i].location){
                    if(!j){
                        flongitude = data.result[i].location.lng;
                        flatitude = data.result[i].location.lat;
                        ftext = data.result[i].name;
                    }
                    sugData[j++] = {
                        'name': data.result[i].name,
                        'latitude': data.result[i].location.lat,
                        'longitude': data.result[i].location.lng
                    }
                }
            }
            that.setData({
                sugData: sugData,
                show: false,
                flongitude: flongitude,
                flatitude: flatitude,
                ftext : ftext
            });
        }
        BMap.suggestion({
            query: e.detail.value,
            region: '广州',
            city_limit: true,
            fail: fail,
            success: success,
            longitude: this.data.longitude,
            latitude: this.data.latitude
        });
    },
    change: function(e){
        var that = this;
        var dataset = e.target.dataset;
        var value = dataset.value;
        var longitude = dataset.longitude;
        var latitude = dataset.latitude;
        //console.log(latitude + ',' + longitude);
        that.setData({
            text: '' + value,
            sugData: [],
            show: true,
            latitude: latitude,
            longitude: longitude
        });
    },
    rollMap: function(e){
        var that = this;
        var fail = function(data) {
            console.log(data)
        };
        var success = function(data) {
            wxMarkerData = data.wxMarkerData;
            that.setData({
                markers: wxMarkerData
            });
        }
        BMap.search({
            "query": '美食',
            location: this.data.flatitude + "," + this.data.flongitude,
            fail: fail,
            page_size: 20,
            scope: 2,
            success: success,
            iconPath: '../../img/marker_red.png',
            iconTapPath: '../../img/marker_red.png',
            width: windowWidth / 15,
            height: windowWidth / 15
        });
        that.setData({
            sugData: [],
            show: true,
            latitude: this.data.flatitude,
            longitude: this.data.flongitude,
            text: this.data.ftext
        });
    },
    showMap: function(e){
        var that = this;
        that.setData({
            sugData: [],
            show: true
        });
    },
    redrawMap: function(e){
        var that = this;
        var placeData = that.data.placeData;
        console.log(placeData);
        that.mapCtx.getCenterLocation({
            success: function(res){
                that.data.latitude = res.latitude;
                that.data.longitude = res.longitude;
                var fail = function(data) {
                    console.log(data)
                };
                var success = function(data) {
                    wxMarkerData = data.wxMarkerData;
                    for(var i = 0; i < wxMarkerData.length; i++){
                        var title = '名称：' + wxMarkerData[i].title + '\n';
                        var address = '地址：' + wxMarkerData[i].address + '\n';
                        var telephone = '电话：' + wxMarkerData[i].telephone + '\n';
                        var price = '价格：' + wxMarkerData[i].price;
                        if(placeData && title == placeData.title && address == placeData.address &&  telephone== placeData.telephone && price == placeData.price){
                            that.showSearchInfo(wxMarkerData, i);
                            that.changeMarkerColor(wxMarkerData, i);
                        }
                    }
                    that.setData({
                        markers: wxMarkerData
                    });
                }
                BMap.search({
                    "query": '美食',
                    location: res.latitude + "," + res.longitude,
                    fail: fail,
                    page_size: 20,
                    scope: 2,
                    success: success,
                    iconPath: '../../img/marker_red.png',
                    iconTapPath: '../../img/marker_red.png',
                    width: windowWidth / 15,
                    height: windowWidth / 15
                });
            }
        })
    }
})