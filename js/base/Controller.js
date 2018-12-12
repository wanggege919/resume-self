window.Controller = function(options){
    var init = options.init  //B
    let object =  {
        view: null,
        model: null,
        init: function(view,model){ //A
            this.view = view
            this.model = model
            this.model.init()
            init.call(this,view,model)//这个init是B
            this.bindEvent.call(this)
        }
    }
    for(let key in options){
        if(key !== 'init'){
            object[key] = options[key]
            // console.log(options[key])
            // console.log(object[key])
        }
    }
    return object
}

