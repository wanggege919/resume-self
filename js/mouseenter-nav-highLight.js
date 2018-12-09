let liTags = document.querySelectorAll('.topNavBar>.nav>ul>li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        //要监听父级元素,且子级元素与父级元素要相连哦
        // console.log(1)
        // console.log(x.currentTarget)
        let liTag = x.currentTarget
        liTag.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        let liTag = x.currentTarget
        liTag.classList.remove('active')
    }
}