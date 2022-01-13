const $ = document.querySelector.bind(document)
$(".search-btn").addEventListener('click', function(){
    console.dir(this);
    this.parentElement.classList.toggle("open")
    this.previousElementSibling.focus()
})
$('.back-btn').addEventListener("click", function(){
    location.href = "../index.html"
})