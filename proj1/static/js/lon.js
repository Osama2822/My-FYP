const favbtns = Array.from(document.querySelectorAll(".favBtn"));

let favItems = [ 
{
    name: 'img46',
    inFav: 0,
    tag : 'L1'

}
,
{
    name: 'img47',
    inFav: 0,
    tag : 'L2'

}
,
{
    name: 'img48',
    inFav: 0,
    tag : 'L3'

}
,
{
    name: 'img49',
    inFav: 0,
    tag : 'L4'

}
,
{
    name: 'img50',
    inFav: 0,
    tag : 'L5'

}
,
{
    name: 'img51',
    inFav: 0,
    tag : 'LQ1'

}
,
{
    name: 'img52',
    inFav: 0,
    tag : 'LQ2'

}
,
{
    name: 'img53',
    inFav: 0,
    tag : 'LQ3'

}
,
{
    name: 'img54',
    inFav: 0,
    tag : 'LQ4'

}
,
{
    name: 'img55',
    inFav: 0,
    tag : 'LQ5'

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