window.Model = function(options){
    let resouseName = options.resouseName
    return {
        //初始化数据
        init: function(){
            var APP_ID = 'qp7wogFI5r7Gep1tymBIoibD-gzGzoHsz';
            var APP_KEY = '9hYKGxnPKONNqR00wasRiLV4';
            AV.init({appId: APP_ID, appKey: APP_KEY});
        },
        //获取数据
        fetch: function(){
            var query = new AV.Query(resouseName);
            return query.find() //返回一个 promise 对象
        },
        //保存数据
        save: function (object) {
            var Message = AV.Object.extend(resouseName)
            var message = new Message()
            return message.save(object)
        }
    }
}