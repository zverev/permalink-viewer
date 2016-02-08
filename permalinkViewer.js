var view = function(id) {
    var oReq = new XMLHttpRequest();
    oReq.onload = function(e) {
        if (e.currentTarget.readyState === 4 && e.currentTarget.status === 200) {
            var resp = JSON.parse(e.currentTarget.response.slice(1,-1));
            console.log(JSON.parse(resp.Result));
        }
    };
    oReq.open('get', 'http://maps.kosmosnimki.ru/TinyReference/Get.ashx?id=' + id, true);
    oReq.send();
};

var viewRaw = function(id) {
    var oReq = new XMLHttpRequest();
    oReq.onload = function(e) {
        if (e.currentTarget.readyState === 4 && e.currentTarget.status === 200) {
            var resp = JSON.parse(e.currentTarget.response.slice(1,-1));
            console.log(resp.Result);
        }
    };
    oReq.open('get', 'http://maps.kosmosnimki.ru/TinyReference/Get.ashx?id=' + id, true);
    oReq.send();
};
