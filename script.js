
function dispalayContainer2() {
    document.getElementById("container1").style.display = "none";
    document.getElementById("container2").style.display = "grid";
    console.log("clicking next button");
}

function dispalayContainer1() {
    document.getElementById("container2").style.display = "none";
    document.getElementById("container1").style.display = "grid";
}
