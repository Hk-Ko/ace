export function showLoaderUi(){
    const loader = document.createElement("div");
    loader.classList.add("loader","animate__animated","animate__fadeIn");
    loader.innerHTML = `
      <div class="d-flex justify-content-center align-items-center min-vh-100 fixed-top" style="background-color:#ffffffbb;">
        <div class="spinner-border text-primary data-loader" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>`;
      document.body.append(loader)
  }
  
 export function removeLoaderUi(){
    const selectCurrentLoader = document.querySelector(".loader")
    selectCurrentLoader.classList.replace("animate__fadeIn","animate__fadeOut")
    selectCurrentLoader.addEventListener("animationend",_=>selectCurrentLoader.remove() )
  }
  
