import { allCartCost, cartBox, cartBtn, cartNumber, items, total } from "../main";

export const cartNumberUpdate = function(){
    cartNumber.forEach(current=>current.innerHTML=parseInt(current.innerHTML)+ 1)
}

export const costTotal = function(){
    let all = document.querySelectorAll(".cart-cost")
    total.innerHTML = [...all].reduce((pv,cv)=>pv+parseFloat(cv.innerHTML),0).toFixed(2);

}

window.inc = function(event,price){
    let currentCart = event.target.closest(".item-in-cart");
    let cartQuantity = currentCart.querySelector(".cart-quantity");
    let cartCost = currentCart.querySelector(".cart-cost");
    cartQuantity.valueAsNumber += 1 ;
    cartCost.innerText = (cartQuantity.valueAsNumber*price).toFixed(2);
    costTotal()
}

window.dec = function(event,price){
    let currentCart = event.target.closest(".item-in-cart");
    let cartQuantity = currentCart.querySelector(".cart-quantity");
    let cartCost = currentCart.querySelector(".cart-cost");
    cartQuantity.valueAsNumber -= 1 ;
    cartCost.innerText = (cartQuantity.valueAsNumber*price).toFixed(2);
    costTotal()
}

export const createItemInCart = function({id,title,price,image}){
    const div = document.createElement("div");
    div.classList.add("item-in-cart")
    div.innerHTML = `
       <div class="p-3 border rounded mb-3">
            <div class="">
                <img src="${image}" alt="" class="cart-item-img">
            </div>
            <p class="fw-bold small">${title}</p>
            <div class="row justify-content-between align-items-center">
                <div class="col-4">
                 <p class="mb-0">$<span class="cart-cost">${price}</sapn></p>
                </div>
                <div class="col-5">
                    <div class="cart-item-quantity input-group input-group-sm">
                        <button class="btn btn-primary" onclick="dec(event,${price})">
                            <i class="bi bi-dash pe-none"></i>
                        </button>
                        <input type="number" class="form-control text-end cart-quantity" value="1">
                        <button class="btn btn-primary" onclick="inc(event,${price})">
                            <i class="bi bi-plus pe-none"></i>
                        </button>
                    </div>
                </div>
            </div>
       </div>
    `;
    cartBox.append(div)
}


export const addToCart = function(e){
    let currentItemCard = e.target.closest(".item-card");
    let itemId = currentItemCard.getAttribute("item-id");
    let itemDetail = items.find(item=>item.id===parseInt(itemId));
    let currentImg = currentItemCard.querySelector(".item-img");

    let newImg = new Image();
    newImg.src = currentImg.src;

    newImg.style.position = "fixed";
    newImg.style.height = 150 +"px";
    newImg.style.transition = 1 +"s";
    newImg.style.zIndex = 2000;
    newImg.style.top = currentImg.getBoundingClientRect().top+"px";
    newImg.style.left = currentImg.getBoundingClientRect().left+"px";

    document.body.append(newImg)

    setTimeout(_=>{
    newImg.style.height = 0+"px";
    newImg.style.transform = "rotate(360deg)";
    newImg.style.top =(cartBtn.getBoundingClientRect().top+10)+"px";
    newImg.style.left = (cartBtn.getBoundingClientRect().left+30)+"px";
    },10)

    setTimeout(_=>{
      cartBtn.classList.add("animate__tada");
      cartNumberUpdate();
      newImg.remove()
      createItemInCart(itemDetail)
      costTotal()
    },800)
    
    cartBtn.addEventListener("animationend",_=>{
        cartBtn.classList.remove("animate__tada")
   }
    )
     }

