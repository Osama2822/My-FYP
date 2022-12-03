function displayFavItems() {
    let FavItems = localStorage.getItem("ItemsInFav");
    FavItems = JSON.parse(FavItems);
  
    const fav = [];
    for (const item in FavItems) {
      fav.push(FavItems[item]);
    }
  
    // console.log(fav);
    let favItemContainer = document.querySelector(".imageContainer");
    if (FavItems && favItemContainer) {
        // console.log("running");
        favItemContainer.innerHTML = "";
  
        fav.map((items, i) => {
          // console.log(item.tag);
          favItemContainer.innerHTML += `
  
                <div data-id="${i}" class="container">
                
                    <div class="imageBox">
                    <img src="/static/images/${items.tag}.jpg">
                  </div>
                  <button id="favBtn" class="favBtn">Add To Fav</button>
                  <button id="delBtn" class="delBtn">Remove</button>
  
                  <style>
                      .delBtn{
                          display: block;
                      }
  
                      .favBtn{
                          display: none;
                      }
                  </style>
                  
  
              </div>
              
  
  
     
  
              `;
        const delBtn = Array.from(document.querySelectorAll(".delBtn"));
  
        delBtn.map((btn) => {
          btn.addEventListener("click", (e) => {
            // FavItems.remove(i);
            fav.splice(e.target.parentElement.dataset.id, 1);
            console.log(e.target.parentElement.dataset.id);
            e.target.parentElement.remove();
            localStorage.removeItem("ItemsInFav");
            localStorage.setItem("ItemsInFav", JSON.stringify(fav));
          });
        });
      });
    }
  
    console.log(FavItems);
  }
  
displayFavItems()
