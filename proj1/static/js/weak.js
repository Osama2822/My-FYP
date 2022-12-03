const favbtns = Array.from(document.querySelectorAll(".favBtn"));
let favItems = [ 
{
    name: 'img36',
    inFav: 0,
    tag : 'W1'

}
,
{
    name: 'img37',
    inFav: 0,
    tag : 'W2'

}
,
{
    name: 'img38',
    inFav: 0,
    tag : 'W3'

}
,
{
    name: 'img39',
    inFav: 0,
    tag : 'W4'

}
,
{
    name: 'img40',
    inFav: 0,
    tag : 'W1'

}
,
{
    name: 'img41',
    inFav: 0,
    tag : 'WV1'

}
,
{
    name: 'img42',
    inFav: 0,
    tag : 'WV2'

}
,
{
    name: 'img43',
    inFav: 0,
    tag : 'WV3'

}
,
{
    name: 'img44',
    inFav: 0,
    tag : 'WV4'

}
,
{
    name: 'img45',
    inFav: 0,
    tag : 'WV5'

}
    
];

favbtns.map((button, i) => {
    button.addEventListener("click", (e) => {
      console.log(i);
      favItemNumber(favItems[i]);
    });
  });

function favItemNumber(favItems) {
    // console.log("The Post selected is", favItems)
    let itemNumber = localStorage.getItem('itemNumber')
    itemNumber = parseInt(itemNumber)
    
    if(itemNumber){
        localStorage.setItem('itemNumber', itemNumber + 1);

    }else{
        localStorage.setItem('itemNumber', 1)
    }
    setFavItem(favItems)
}

function setFavItem(favItems){
    let FavItems = localStorage.getItem('ItemsInFav')
    FavItems = JSON.parse(FavItems)

    if(FavItems != null){

        if (FavItems[favItems.name] == undefined){
            
            FavItems = {
                ...FavItems,
                [favItems.name]: favItems
            }

        }
        FavItems[favItems.name].inFav += 1
    }
    else{
        favItems.inFav = 1
        FavItems = {
            [favItems.name] : favItems
        }
    }

   
    localStorage.setItem('ItemsInFav', JSON.stringify(FavItems))
}


// displayFavItems()