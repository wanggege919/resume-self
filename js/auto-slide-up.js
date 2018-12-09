let specialTags = document.querySelectorAll('[data-x]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}
findClosestAndRemoveOffset()
window.addEventListener('scroll',function(){
    findClosestAndRemoveOffset()
})

/* helper */
function findClosestAndRemoveOffset() {
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
    }
    //minIndex 就是离窗口最近的元素
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelectorAll('a[href="#' + id + '"]')[0]
    let li = a.parentNode
    let children = li.parentNode.children
    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove('highLight')
    }
    li.classList.add('highLight')
}