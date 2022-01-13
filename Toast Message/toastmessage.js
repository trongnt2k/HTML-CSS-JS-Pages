function toast({ type='info', title='', content=''}){
    var main = document.getElementById("main")
    const icon = {
        success: "fas fa-check-circle",
        info: "fas fa-exclamation-circle",
        warning: "fas fa-exclamation-circle"
    }
    if(main){
        const toast = document.createElement('div')

        main.appendChild(toast)
        setTimeout(()=>{
            main.removeChild(toast)
        }, 4000)

        toast.onclick = function(e){
            if(e.target.closest('.toast-delete'))
                main.removeChild(toast)
        }
        toast.classList.add('toast', `toast-${type}`)
        toast.innerHTML = `
            <div class="toast-icon ${type}-icon">
                <i class="${icon[type]}"></i>
            </div>
            <div class="toast-content">
                <h4>${title}</h4>
                <span>${content}</span>
            </div>
            <div class="toast-delete">
                <i class="fas fa-times"></i>
            </div>
        `
    }
    
    
}


function showSuccessToast(){
    toast({
        type: "success",
        title: "Success",
        content: "Thất bại là mẹ thành công!!!"
    })
}
function showErrorToast(){
    toast({
        type: "warning",
        title: "Erorr",
        content: "Thất bại cmnr :("
    })
}
document.querySelector('.back-btn').addEventListener("click", function(){
    location.href = "../index.html"
})