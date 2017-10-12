/**
 * Created by zzy on 2017/8/1.
 */
window.onload = function () {
    var s1 = document.getElementById("select1");
    var s2 = document.getElementById("select2");
    var s3 = document.getElementById("select3");

    var se1 = document.getElementById("se1");
    var se2 = document.getElementById("se2");

}
function se1click() {
    console.log("s1 click");
    var state = se1.style.visibility;
    if (state === "visible") {
        se1.style.visibility = "hidden";
    }else{
        se1.style.visibility = "visible"
    }
    console.log("ok");
}

function se2click() {
    console.log("s2 click");
    var state = se2.style.visibility;
    if (state === "visible") {
        se2.style.visibility = "hidden";
    }else{
        se2.style.visibility = "visible"
    }
    console.log("ok");
}