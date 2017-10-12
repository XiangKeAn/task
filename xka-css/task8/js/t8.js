/**
 * Created by zzy on 2017/8/7.
 */
window.onload = function () {
    console.log("JQuery is OK");

    //以下是调用函数
    var mb = myBrowser();
    if ("IE" == mb) {
        // alert("我是 IE");
    }
    if ("FF" == mb) {
        // alert("我是 Firefox");
    }
    if ("Chrome" == mb) {
        // alert("我是 Chrome");
    }
    if ("Opera" == mb) {
        // alert("我是 Opera");
    }
    if ("Safari" == mb) {
        // alert("我是 Safari");
        var sa = document.getElementsByClassName("s1");
        for(var i=0;i<sa.length;i++){
            sa[i].style.marginLeft = "1rem";
        }

    }

    // var arr = document.getElementsByClassName("l-item");
    // for(var i=0;i<arr.length;i++){
    //     console.log(arr[i]);
    //     arr[i].onmouseenter = function(){
    //         console.log(this);
    //         show(this);
    //     }
    //     arr[i].onmouseleave = function(){
    //         console.log(this);
    //         hide(this);
    //     }
    // }

}

function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
        return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}

function show(element) {
    console.log(element);
    element.children[0].style.display = "block";
}
function hide(element) {
    element.style.display = "none";
}

function openURL() {
    window.open("../task8s/teamwork.html");
}

