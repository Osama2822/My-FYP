const favbtns = Array.from(document.querySelectorAll(".favBtn"));

let favItems = [ 
    {
        name: 'img1 ',
        inFav: 0,
        tag : 'Angry1'
    
    }
    ,
    {
        name: 'img2 ',
        inFav: 0,
        tag : 'Angry2'
    
    }
    ,
    {
        name: 'img3 ',
        inFav: 0,
        tag : 'Angry3'
    
    }
    ,
    {
        name: 'img4 ',
        inFav: 0,
        tag : 'Angry4'
    
    }
    ,
    {
        name: 'img5',
        inFav: 0,
        tag : 'Angry5'
    
    },
    {
        name: 'img6 ',
        inFav: 0,
        tag : 'AQ'
    
    }
    ,
    {
        name: 'img7 ',
        inFav: 0,
        tag : 'AQ1'
    
    }
    ,
    {
        name: 'img8 ',
        inFav: 0,
        tag : 'AQ2'
    
    }
    ,
    {
        name: 'img9',
        inFav: 0,
        tag : 'AQ3'
    
    }
    ,
    {
        name: 'img10',
        inFav: 0,
        tag : 'AQ4'
    
    }
    ,
    {
        name: 'img11',
        inFav: 0,
        tag : 'AQ5'
    
    }
    ,
    {
        name: 'img12',
        inFav: 0,
        tag : 'AQ6'
    
    }
    ,
    {
        name: 'img13',
        inFav: 0,
        tag : 'AQ7'
    
    }
    ,
    {
        name: 'img14',
        inFav: 0,
        tag : 'AQ8'
    
    }];

favbtns.map((button, i) => {
  button.addEventListener("click", (e) => {
    console.log(i);
    favItemNumber(favItems[i]);
  });
});

function favItemNumber(favItems) {
  // console.log("The Post selected is", favItems)
  let itemNumber = localStorage.getItem("itemNumber");
  itemNumber = parseInt(itemNumber);

  if (itemNumber) {
    localStorage.setItem("itemNumber", itemNumber + 1);
  } else {
    localStorage.setItem("itemNumber", 1);
  }
  setFavItem(favItems);
}

function setFavItem(favItems) {
  let FavItems = localStorage.getItem("ItemsInFav");
  FavItems = JSON.parse(FavItems);

  if (FavItems != null) {
    if (FavItems[favItems.name] == undefined) {
      FavItems = {
        ...FavItems,
        [favItems.name]: favItems,
      };
    }
    FavItems[favItems.name].inFav += 1;
  } else {
    favItems.inFav = 1;
    FavItems = {
      [favItems.name]: favItems,
    };
  }

  localStorage.setItem("ItemsInFav", JSON.stringify(FavItems));
}

// displayFavItems()


