import { excerpt } from "./utilities";


export const createItemUi = function(item){
    let itemDiv = document.createElement("div");
                itemDiv.classList.add("col-md-6","col-lg-4");
                itemDiv.innerHTML = `
                <div class="card item-card" item-id="${item.id }">
                  <div class="card-body d-flex flex-column">
                    <div class="mb-3">
                      <img src="${item.image}" class="item-img" alt="">
                    </div>
                    <p class="card-title fw-bold text-truncate">${item.title}</p>
                    <p class="card-text small">
                      ${excerpt(item.description)}                     
                    </p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                      <p class="fw-bold mb-0">$ <span>${item.price}</span></p>
                      <button class="btn btn-outline-primary add-cart">
                      <i class="bi bi-cart-plus pe-none"></i>
                      Add Cart
                      </button>
                    </div>
                  </div>
                </div>
                `;
        return itemDiv;
}