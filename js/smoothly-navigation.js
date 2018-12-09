!function(){
    var view = document.querySelector('.topNavBar>.nav')
    var controller = {
        view: null,
        aTags: null,
        init: function(view){
            this.view = view
            this.initAnimation()
            this.bindEvent()
        },
        initAnimation: function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        bindEvent: function(){
            let aTags = this.view.querySelectorAll('.topNavBar>.nav>ul>li>a')
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = (x)=>{
                    x.preventDefault() //阻止<a>标签的默认跳转动作
                    let a = x.currentTarget
                    let href = a.getAttribute('href')
                    let element = document.querySelector(href)
                    this.scrollToElement(element)
                }
            }
        },
        scrollToElement: function(element){
            let top = element.offsetTop
            let currentTop = window.scrollY
            let targetTop = top - 80
            let s = targetTop - currentTop
            let t = Math.abs(s / 100 * 100)
            if (t > 500) {
                t = 500
            }
            var coords = {y: currentTop};
            var tween = new TWEEN.Tween(coords)
                .to({y: targetTop}, t)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start();
        },


    }
    controller.init(view)

}.call()
