
function changeLightBlueRectangle(){
    var rectangles = document.getElementsByClassName("LightBlueRectangle");
    var color = rectangles[0].style.fill  == "yellow"?"#76BDF9":"yellow";
    for (var i=0; i<rectangles.length; i++) {
      rectangles[i].style.fill = color;
    }
}

function changeDarkBlueRectangle(){
    var rectangles = document.getElementsByClassName("DarkBlueRectangle");
    console.log(rectangles[0].style.fill);
    var color = rectangles[0].style.fill  == "green"?"#000360":"green";
    for (var i=0; i<rectangles.length; i++) {
      rectangles[i].style.fill = color;
    }
}