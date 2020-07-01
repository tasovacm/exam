function getViewport() {
    var hero = document.querySelector ( '.hero' );
    var bounding = hero.getBoundingClientRect ();
    if ((bounding.height + bounding.y)<0) {
        var item = document.getElementsByClassName ( "header" )
        for (let i = 0; i<item.length; i++) {
            item[i].style.backgroundColor = "#000";
            item[i].style.transition = "background-color 1s";
        }
    } else {
         item = document.getElementsByClassName ( "header" )
        for (let i = 0; i<item.length; i++) {
            item[i].style.backgroundColor = "#ff000000";
        }
    }

}
window.onscroll = function () {
    getViewport ()
};
document.addEventListener("load",()=>{
    console.log("load");
    let imageArray = document.getElementsByClassName(".gallery-item");
    console.log(imageArray);
    for (let i = 0 ; i < imageArray.length ; ++i) {
            imageArray[i].addEventListener("click", function() {
                console.log(imageArray[i].getBoundingClientRect().left);
            });
        }
    } );