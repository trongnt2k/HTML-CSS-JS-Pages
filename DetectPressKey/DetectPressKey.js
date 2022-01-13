const $ = document.querySelector.bind(document)
window.addEventListener('keydown', function(e){
    $(".box-pressed").classList.remove("hide")
    $(".box").classList.add("hide")
    if(e.key)
        $(".key").innerText = e.key.toUpperCase()
    if(e.key === " ")
        $(".key").innerText = e.code
    $(".code").innerText = e.code
    $(".which").innerText = e.which
    $(".location").innerText = e.location
    $(".circle").innerText = e.keyCode
})
$('.back-btn').addEventListener("click", function(){
    location.href = "../index.html"
})