import './style.scss';
import { removeLoaderUi, showLoaderUi } from './js/loader';



let items = [];
let itemRow = document.querySelector(".item-row")


showLoaderUi()
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{

              items = json

              items.forEach(item => {
                console.log(item)
                let itemDiv = document.createElement("div");
                itemDiv.classList.add("col-md-6","col-lg-4");
                itemDiv.innerHTML = `
                <div class="card item-card">
                  <div class="card-body d-flex flex-column">
                    <div class="mb-3">
                      <img src="${item.image}" class="item-img" alt="">
                    </div>
                    <p class="card-title fw-bold text-truncate">${item.title}</p>
                    <p class="card-text small">
                      ${item.description.substring(0,100)}                     
                    </p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                      <p class="fw-bold mb-0">$ <span>${item.price}</span></p>
                      <button class="btn btn-outline-primary">
                      <i class="bi bi-cart-plus"></i>
                      Add Cart
                      </button>
                    </div>
                  </div>
                </div>
                `;
                itemRow.append(itemDiv)
              })

              // console.log(items)
              removeLoaderUi()
            })