const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
$(".tags-area > input").focus()
let handleDelete = function(){
    $(".tags-area > .tags").removeChild(this.parentElement)
    $(".tags-area > input").focus()
}
const del = () => {
    $$(".fa-times").forEach((item) => {
        item.addEventListener("click", handleDelete)
    })
}
const removeHandle = () => {
    $$(".fa-times").forEach((item) => {
        item.removeEventListener("click", handleDelete)
    })
}
del()
window.addEventListener("keydown", function(e){
    if(e.keyCode === 13){
        if($(".tags-area > input").value.trim() !== ""){
            const listSpan = $$(".tag-name")
            let value = $(".tags-area > input").value
            let check = false
            for(var i=0; i<listSpan.length; i++){
                if(listSpan[i].innerText === value){
                    check = true
                    $(".tags-area > input").value = ""
                    break
                }      
            }
            if(!check){
                const span = document.createElement("span")
                    span.classList.add("tag")
                    span.innerHTML = `<p class='tag-name'>${value}</p><i class='fas fa-times'></i>`
                    $(".tags-area > .tags").appendChild(span)
                    $(".tags-area > input").value = ""
                    removeHandle()
                    del()
            }
        }
    }
})
$(".remove").addEventListener("click", ()=>{
    $$(".fa-times").forEach((item) => {
        $(".tags-area > .tags").removeChild(item.parentElement)
    })
    $(".tags-area > input").focus()
})
$('.back-btn').addEventListener("click", function(){
    location.href = "../index.html"
})