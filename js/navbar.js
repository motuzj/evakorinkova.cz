function showMenu() {
    var x = document.getElementById("links");
    var y = document.getElementById("kontakt2");
    var z = document.getElementById("kontakt1");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    if (y.style.display === "contents") {
        y.style.display = "none";
    } else {
        y.style.display = "contents";
    }
    if (z.style.display === "flex") {
        z.style.display = "none";
    } else {
        z.style.display = "flex";
    }
}
