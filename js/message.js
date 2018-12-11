!function () {
    var view = document.querySelector('section.message')

    var model = {
        //初始化数据
        init: function(){
            var APP_ID = 'qp7wogFI5r7Gep1tymBIoibD-gzGzoHsz';
            var APP_KEY = '9hYKGxnPKONNqR00wasRiLV4';
            AV.init({appId: APP_ID, appKey: APP_KEY});
        },
        //获取数据
        fetch: function(){
            var query = new AV.Query('Message');
            return query.find()
        },
        //保存数据
        save: function (name,content) {

            var Message = AV.Object.extend('Message')
            var message = new Message()
            return message.save({
                name: name,
                'content': content
            })
        }
    }

    var controller ={
        view: null,
        model: null,
        messageList: null,
        form: null,
        init: function (view,model) {
            this.view = view
            this.model = model
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('#postMessage')
            this.model.init()
            this.loadMessages()
            this.bindEvent()
        },

        loadMessages: function () {
            this.model.fetch().then((message)=>{
                // console.log(message)
                // console.log(message[0].attributes)
                // console.log(message[1].attributes)
                var array = message.map((item) => item.attributes)
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}: ${item.content}`
                    this.messageList.appendChild(li)
                })
                // 成功获得实例
                // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
            }, function (error) {
                // 异常处理
            })
        },
        bindEvent: function () {
            this.form.addEventListener('submit', (e)=>{
                e.preventDefault()
                console.log(1)
                this.saveMessage()
            })
        },
        saveMessage: function(){
            var myForm = this.form
            var content = myForm.querySelector('input[name=content]').value
            var name = myForm.querySelector('input[name=name]').value
            this.model.save(name,content).then(function (object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
                myForm.querySelector('input[name=name]').value = ''
                console.log(object)
            })
        },
    }
    controller.init(view,model)
}.call()



