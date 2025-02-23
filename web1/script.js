const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length
console.log(count)

next.addEventListener('click', function(event){
    event.preventDefault()
    if (count == 1){
        //Xem het binh luan
        return false
    }
    translateY += -400
    comment.style.transform = `translateY(${translateY}px)`
    count--
})

prev.addEventListener('click', function(event){
    event.preventDefault()
    if (count == commentItem.length){
        return false
    }
    translateY += 400
    comment.style.transform = `translateY(${translateY}px)`
    count++
})