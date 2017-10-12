/**
 * Created by zzy on 2017/8/4.
 */

function showChoose(id) {
    var iterator = document.createNodeIterator(id,NodeFilter.SHOW_ELEMENT,null,false);
    var node = iterator.nextNode();
    while (node !== null){
        console.log(node);
        node.style.visibility="visible";
        node = iterator.nextNode();
    }
}
function hideChoose(id) {
    var iterator = document.createNodeIterator(id,NodeFilter.SHOW_ELEMENT,null,false);
    var node = iterator.nextNode();
    while (node !== null){
        console.log(node);
        node.style.visibility="hidden";
        node = iterator.nextNode();
    }
}
function showMenu(menus) {
    var state = menus.style.visibility;
    if(state === "hidden"){
        menus.style.visibility="visible";
    }else{
        menus.style.visibility="hidden";
    }
}

// function closeMenu(menus) {
//         menus.style.visibility="hidden";
// }

function go(href) {
    console.log(href);
    if(href.id === "vote"){
        window.open("../task7/vote.html");
    }
    if(href.id === "res"){
        window.open("../task7/result.html");
    }
    if(href.id === "home"){
        window.open("../task7/index.html");
    }
}