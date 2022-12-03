const favbtns = Array.from(document.querySelectorAll(".favBtn"));


let favItems = [ 
{
    name: 'img15',
    inFav: 0,
    tag : 'DE1'

}
,
{
    name: 'img16',
    inFav: 0,
    tag : 'DE2'

}
,
{
    name: 'img17',
    inFav: 0,
    tag : 'DE3'

}
,
{
    name: 'img18',
    inFav: 0,
    tag : 'DE4'

}
,
{
    name: 'img19',
    inFav: 0,
    tag : 'DE5'

}
,
{
    name: 'img20',
    inFav: 0,
    tag : 'DE6'

}
,
{
    name: 'img21',
    inFav: 0,
    tag : 'DE7'

}
,
{
    name: 'img22',
    inFav: 0,
    tag : 'DE8'

},
{
    name: 'img23',
    inFav: 0,
    tag : 'DQ1'

}
,
{
    name: 'img24',
    inFav: 0,
    tag : 'DQ2'

}
,
{
    name: 'img25',
    inFav: 0,
    tag : 'DQ3'

}
,
{
    name: 'img26',
    inFav: 0,
    tag : 'DQ4'

}
,
{
    name: 'img27',
    inFav: 0,
    tag : 'DQ5'

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