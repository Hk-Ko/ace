import './style.scss';
import { removeLoaderUi, showLoaderUi } from './js/loader';
import { createItemUi } from './js/item';
import { addToCart } from './js/cart';
import * as bootstrap from 'bootstrap';




export let items = [];
export const itemRow = document.querySelector(".item-row");
export const cartBtn = document.querySelector(".cart-btn");
export const cartNumber = document.querySelectorAll(".cart-number");
export const cartBox = document.querySelector("#cartBox")
export const total = document.querySelector("#total");
export const allCartCost = document.querySelectorAll(".cart-cost");
// export const cartCost =document.querySelector(".cartCost");

showLoaderUi()
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{

              items = json

              items.forEach(item => {
                // console.log(item)
                
                itemRow.append(createItemUi(item))
              })

              // console.log(items)
              removeLoaderUi()
            })

//event-delegation

itemRow.addEventListener("click",e=>{
  console.log(e.target)
  if(e.target.classList.contains("add-cart")){
    addToCart(e)
    // console.log("add-to-cart") 
  }
})
