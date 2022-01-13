const $ = document.querySelector.bind(document)
handleOnclick = function(e){    
    $(".black-screen").classList.toggle("hidden")
}
$(".modal-close").addEventListener("click", handleOnclick)
$(".modal-show").addEventListener("click", handleOnclick)
$(".modal-header > i").addEventListener("click", handleOnclick)
$(".black-screen").addEventListener("click", function(e){
    if(e.target === e.currentTarget)
        $(".black-screen").classList.toggle("hidden")
})
$('.back-btn').addEventListener("click", function(){
    location.href = "../index.html"
})