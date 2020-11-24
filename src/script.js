window.onload = function () {
    changeSprint(1);
    loadDescriptionsToMobileVersion();
    loadSprintsNames();
}
//CONTENT
var sprintsNames = ["Sprint 1","Sprint 2","Sprint 3","Sprint 4","Sprint 5"];
var sprintsDescriptions = ["1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam, culpa delectus, dicta inventore itaque laborum magnam minima neque quasi reiciendis repudiandae? Illo ipsam, voluptatem!",
    "2Accusantium alias animi aut, cum debitis dicta ipsa laudantium maiores minima nemo obcaecati rem repudiandae ullam? A at dolorem ex id illo ipsum pariatur similique sint unde voluptatibus. Aliquam animi assumenda beatae culpa cumque ducimus et illo incidunt ipsum laborum libero magni, modi mollitia nemo nobis nulla obcaecati optio perspiciatis quaerat quasi, quisquam reiciendis rerum, sapiente sequi totam unde ut vel?",
    "3A at dolorem ex id illo ipsum pariatur similique sint unde voluptatibus. Aliquam animi assumenda beatae culpa cumque ducimus et illo incidunt ipsum laborum libero magni, modi mollitia nemo nobis nulla obcaecati optio perspiciatis quaerat quasi, quisquam reiciendis rerum, sapiente sequi totam unde ut vel? Animi dolorem eaque expedita id quas quisquam quod sunt vitae! Aliquid deleniti eum reprehenderit!",
    "4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam, culpa delectus, dicta inventore itaque laborum magnam minima neque quasi reiciendis repudiandae? Illo ipsam, voluptatem! Accusantium alias animi aut, cum debitis dicta ipsa laudantium maiores minima nemo obcaecati rem repudiandae ullam? ",
    "5Accusamus aliquam, culpa delectus, dicta inventore itaque laborum magnam minima neque quasi reiciendis repudiandae? Illo ipsam, voluptatem! Accusantium alias animi aut, cum debitis dicta ipsa laudantium maiores minima nemo obcaecati rem repudiandae ullam? A at dolorem ex id illo ipsum pariatur similique sint unde voluptatibus. Aliquam animi assumenda beatae culpa cumque ducimus et illo incidunt ipsum laborum libero magni, modi mollitia nemo nobis nulla "];
var sprintsPaths = [["Spring-Boot"],
                    ["Spring-Boot","Web","Tests"],
                    ["React","Tests"],
                    ["Spring-Boot","Tests","Web","Security"],
                    ["React","Redux","Tests"]];
var rectanglesToClear = ["Spring-Boot","Web","Security","React","Redux","Tests"];
var activePath = "#000360";
var inactivePath = "#A9D6FC";
var activeButton ="#8C037F";
var inactiveButton = "#D092CB";
//CONTENT-END

var buttons = document.getElementsByClassName("button");
var description = document.getElementById("description");
var mobileButtons = document.getElementsByClassName("card-header");


function changeSprint(sprintNumber){
    for (var i=0; i<buttons.length; i++) {
          buttons[i].style.backgroundColor = inactiveButton;
    }
    buttons[sprintNumber-1].style.backgroundColor = activeButton;
    description.innerHTML = "<h3>Sprint "+sprintNumber+"</h3>"+"<p>"+sprintsDescriptions[sprintNumber-1]+"</p>";
    displayPath(sprintNumber);
}

function displayPath(sprintNumber){
    clearPath();
    for (var i=0; i<sprintsPaths[sprintNumber-1].length; i++) {
        var el = document.getElementById(sprintsPaths[sprintNumber-1][i]);
        el.style.fill = "#FFFFFF";
        el.previousElementSibling.style.fill = activePath;
    }
}

function clearPath(){
    for (var i=0; i<rectanglesToClear.length; i++) {
        var el = document.getElementById(rectanglesToClear[i]);
        el.style.fill = "#000000";
        el.previousElementSibling.style.fill = inactivePath;
    }
}
function loadDescriptionsToMobileVersion(){
    for (var i=0; i<sprintsDescriptions.length; i++) {
          var el = document.getElementById("collapse"+(i+1));
          el.firstElementChild.innerText = sprintsDescriptions[i];
    }
}
function loadSprintsNames(){
    for (var i=0; i<buttons.length; i++) {
          buttons[i].innerText = sprintsNames[i];
    }
    for (var i=0; i<mobileButtons.length; i++) {
              mobileButtons[i].querySelector("a h5").innerText = sprintsNames[i];
        }
}

