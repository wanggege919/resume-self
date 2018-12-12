!function () {
    var view = View('section.message')

    var model = Model({resouseName: 'Message'})

    var controller = Controller({
        messageList: null,
        form: null,
        init: function(view,model){
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('#postMessage')
            this.loadMessages()
            // console.log(this.loadMessages())
        },
        loadMessages: function () {
            this.model.fetch().then((message)=>{
                // console.log(this.model.fetch())
                // console.log(message)
                var array = message.map((item) => item.attributes)
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}: ${item.content}`
                    this.messageList.appendChild(li)
                })
            }, function (error) {
            })
        },
        bindEvent: function () {
            this.form.addEventListener('submit', (e)=>{
                e.preventDefault()
                // console.log(1)
                this.saveMessage()
            })
        },
        saveMessage: function(){
            var myForm = this.form
            var content = myForm.querySelector('input[name=content]').value
            var name = myForm.querySelector('input[name=name]').value
            myForm.querySelector('.nameSpace>p').classList.remove('active')
            myForm.querySelector('.contentSpace>p').classList.remove('active')
            if(name === ''){
                myForm.querySelector('.nameSpace>p').classList.add('active')
            }else if(content === ''){
                myForm.querySelector('.contentSpace>p').classList.add('active')
            }else{
                this.model.save({'name': name,'content': content}).then((object)=>{
                    let li = document.createElement('li')
                    li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                    this.messageList.appendChild(li)
                    myForm.querySelector('input[name=content]').value = ''
                    myForm.querySelector('input[name=name]').value = ''
                    // console.log(object)
                })
            }


        },
    })
    controller.init(view,model)
}.call()



