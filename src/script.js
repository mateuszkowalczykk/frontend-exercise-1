var sprintDescriptions = ["<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam, culpa delectus, dicta inventore itaque laborum magnam minima neque quasi reiciendis repudiandae? Illo ipsam, voluptatem!</p>",
    "<p>Accusantium alias animi aut, cum debitis dicta ipsa laudantium maiores minima nemo obcaecati rem repudiandae ullam? A at dolorem ex id illo ipsum pariatur similique sint unde voluptatibus. Aliquam animi assumenda beatae culpa cumque ducimus et illo incidunt ipsum laborum libero magni, modi mollitia nemo nobis nulla obcaecati optio perspiciatis quaerat quasi, quisquam reiciendis rerum, sapiente sequi totam unde ut vel?</p>",
    "<p>A at dolorem ex id illo ipsum pariatur similique sint unde voluptatibus. Aliquam animi assumenda beatae culpa cumque ducimus et illo incidunt ipsum laborum libero magni, modi mollitia nemo nobis nulla obcaecati optio perspiciatis quaerat quasi, quisquam reiciendis rerum, sapiente sequi totam unde ut vel? Animi dolorem eaque expedita id quas quisquam quod sunt vitae! Aliquid deleniti eum reprehenderit!</p>",
    "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam, culpa delectus, dicta inventore itaque laborum magnam minima neque quasi reiciendis repudiandae? Illo ipsam, voluptatem! Accusantium alias animi aut, cum debitis dicta ipsa laudantium maiores minima nemo obcaecati rem repudiandae ullam? </p>",
    "<p>Accusamus aliquam, culpa delectus, dicta inventore itaque laborum magnam minima neque quasi reiciendis repudiandae? Illo ipsam, voluptatem! Accusantium alias animi aut, cum debitis dicta ipsa laudantium maiores minima nemo obcaecati rem repudiandae ullam? A at dolorem ex id illo ipsum pariatur similique sint unde voluptatibus. Aliquam animi assumenda beatae culpa cumque ducimus et illo incidunt ipsum laborum libero magni, modi mollitia nemo nobis nulla </p>"];
var buttons = document.getElementsByClassName("button");
var description = document.getElementById("description");

changeSprint(1);

function changeSprint(sprintNumber){
    for (var i=0; i<buttons.length; i++) {
          buttons[i].style.backgroundColor = "#D092CB";
    }
    buttons[sprintNumber-1].style.backgroundColor = "#8C037F";
    description.innerHTML = "<h3>Sprint "+sprintNumber+"</h3>"+sprintDescriptions[sprintNumber-1];
}




