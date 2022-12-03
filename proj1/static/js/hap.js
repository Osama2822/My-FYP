const favbtns = Array.from(document.querySelectorAll(".favBtn"));




let favItems = [ 
{
    name: 'img56',
    inFav: 0,
    tag : 'hv1'

}
,
{
    name: 'img57',
    inFav: 0,
    tag : 'hv2'

}
,
{
    name: 'img58',
    inFav: 0,
    tag : 'hv3'

}
,
{
    name: 'img59',
    inFav: 0,
    tag : 'hv4'

}
,
{
    name: 'img60',
    inFav: 0,
    tag : 'H1'

}
,
{
    name: 'img61',
    inFav: 0,
    tag : 'H2'

}
,
{
    name: 'img62',
    inFav: 0,
    tag : 'H3'

}
,
{
    name: 'img63',
    inFav: 0,
    tag : 'H4'

}
,
{
    name: 'img64',
    inFav: 0,
    tag : 'H5'

}
,
{
    name: 'img65',
    inFav: 0,
    tag : 'H6'

}
,
{
    name: 'img66',
    inFav: 0,
    tag : 'H7'

}
,
{
    name: 'img67',
    inFav: 0,
    tag : 'H8'

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