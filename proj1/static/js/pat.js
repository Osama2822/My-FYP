const favbtns = Array.from(document.querySelectorAll(".favBtn"));


let favItems = [ 
{
    name: 'img68',
    inFav: 0,
    tag : 'PV1'

}
,
{
    name: 'img69',
    inFav: 0,
    tag : 'PV2'

}
,
{
    name: 'img70',
    inFav: 0,
    tag : 'PV3'

}
,
{
    name: 'img71',
    inFav: 0,
    tag : 'PV4'

}
,
{
    name: 'img72',
    inFav: 0,
    tag : 'PV5'

}
,
{
    name: 'img73',
    inFav: 0,
    tag : 'PQ1'

}
,
{
    name: 'img74',
    inFav: 0,
    tag : 'PQ2'

}
,
{
    name: 'img75',
    inFav: 0,
    tag : 'PQ3'

}
,
{
    name: 'img76',
    inFav: 0,
    tag : 'PQ4'

}
,
{
    name: 'img77',
    inFav: 0,
    tag : 'PQ5'

}
,
{
    name: 'img78',
    inFav: 0,
    tag : 'PQ6'

}
,
{
    name: 'img79',
    inFav: 0,
    tag : 'PQ7'

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