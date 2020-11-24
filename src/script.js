var sprintsDescriptions = ["<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam, culpa delectus, dicta inventore itaque laborum magnam minima neque quasi reiciendis repudiandae? Illo ipsam, voluptatem!</p>",
    "<p>Accusantium alias animi aut, cum debitis dicta ipsa laudantium maiores minima nemo obcaecati rem repudiandae ullam? A at dolorem ex id illo ipsum pariatur similique sint unde voluptatibus. Aliquam animi assumenda beatae culpa cumque ducimus et illo incidunt ipsum laborum libero magni, modi mollitia nemo nobis nulla obcaecati optio perspiciatis quaerat quasi, quisquam reiciendis rerum, sapiente sequi totam unde ut vel?</p>",
    "<p>A at dolorem ex id illo ipsum pariatur similique sint unde voluptatibus. Aliquam animi assumenda beatae culpa cumque ducimus et illo incidunt ipsum laborum libero magni, modi mollitia nemo nobis nulla obcaecati optio perspiciatis quaerat quasi, quisquam reiciendis rerum, sapiente sequi totam unde ut vel? Animi dolorem eaque expedita id quas quisquam quod sunt vitae! Aliquid deleniti eum reprehenderit!</p>",
    "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam, culpa delectus, dicta inventore itaque laborum magnam minima neque quasi reiciendis repudiandae? Illo ipsam, voluptatem! Accusantium alias animi aut, cum debitis dicta ipsa laudantium maiores minima nemo obcaecati rem repudiandae ullam? </p>",
    "<p>Accusamus aliquam, culpa delectus, dicta inventore itaque laborum magnam minima neque quasi reiciendis repudiandae? Illo ipsam, voluptatem! Accusantium alias animi aut, cum debitis dicta ipsa laudantium maiores minima nemo obcaecati rem repudiandae ullam? A at dolorem ex id illo ipsum pariatur similique sint unde voluptatibus. Aliquam animi assumenda beatae culpa cumque ducimus et illo incidunt ipsum laborum libero magni, modi mollitia nemo nobis nulla </p>"];
var buttons = document.getElementsByClassName("button");
var description = document.getElementById("description");
var sprintsPaths = [["Spring-Boot"],
                    ["Spring-Boot","Web","Tests"],
                    ["React","Tests"],
                    ["Spring-Boot","Tests","Web","Security"],
                    ["React","Redux","Tests"]];

changeSprint(1);

function changeSprint(sprintNumber){
    for (var i=0; i<buttons.length; i++) {
          buttons[i].style.backgroundColor = "#D092CB";
    }
    buttons[sprintNumber-1].style.backgroundColor = "#8C037F";
    description.innerHTML = "<h3>Sprint "+sprintNumber+"</h3>"+sprintsDescriptions[sprintNumber-1];
    displayPath(sprintNumber);
}


function displayPath(sprintNumber){
    clearPath();
    for (var i=0; i<sprintsPaths[sprintNumber-1].length; i++) {
        var el = document.getElementById(sprintsPaths[sprintNumber-1][i]);
        el.style.fill = "#FFFFFF";
        el.previousElementSibling.style.fill = "#000360";
    }
}

function clearPath(){
    var rectanglesToClear = ["Spring-Boot","Web","Security","React","Redux","Tests"];
    for (var i=0; i<rectanglesToClear.length; i++) {
              var el = document.getElementById(rectanglesToClear[i]);
              el.style.fill = "#000000";
              el.previousElementSibling.style.fill = "#A9D6FC";
        }

}

