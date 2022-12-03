const favbtns = Array.from(document.querySelectorAll(".favBtn"));


let favItems = [ 
{
    name: 'img28',
    inFav: 0,
    tag : 'DV1'

}
,
{
    name: 'img29',
    inFav: 0,
    tag : 'DV2'

}
,
{
    name: 'img30',
    inFav: 0,
    tag : 'DV3'

}
,
{
    name: 'img31',
    inFav: 0,
    tag : 'DV4'

}
,
{
    name: 'img32',
    inFav: 0,
    tag : 'DIS1'

}
,
{
    name: 'img33',
    inFav: 0,
    tag : 'DIS2'

}
,
{
    name: 'img34',
    inFav: 0,
    tag : 'DIS3'

}
,
{
    name: 'img35',
    inFav: 0,
    tag : 'DIS4'

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