let up = document.querySelector(".up");
window.onscroll = function(){
    if (this.scrollY >= 200) {
        up.classList.add("show");
    }else{
        up.classList.remove("show");

    }
    
  
}
up.onclick = _ =>{
    window.scrollTo(
        {
            top:0,
            behavior:"smooth"
        });
}


let proList = document.querySelector(".productList");
let listicon = document.querySelector(".shoping");
let btns = document.querySelector("form .btn");
let buyBtn = document.querySelectorAll(".add-cart");
listicon.onclick = _ => {
    console.log("sdfsf");
    proList.classList.toggle("show")
    btns.classList.toggle("hidden")
}
buyBtn.forEach(btn => {
    btn.onclick = _ =>{
        let proName = btn.parentElement.firstElementChild.innerHTML;
        let proPrice = btn.parentElement.firstElementChild.nextElementSibling.innerHTML;
       
    
        proList.innerHTML += `<div class="pr">
                         <span class="prname">${proName}</span>
                            <span class="prp">${proPrice}</span>`
    }
});
