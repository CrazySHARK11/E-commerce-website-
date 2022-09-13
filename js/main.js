// ----------menubar

const menuitem = document.getElementById("menuitem");

menuitem.style.maxHeight = "0px" ; 

function menutoggle(){
    if(menuitem.style.maxHeight == "0px")
    {
        menuitem.style.maxHeight = "200px"
    }
    else{
        menuitem.style.maxHeight = "0px"
    }
}

// --------------------- product gallery ---------- // 

const productImg = document.getElementById("productImg");
const smallImg = document.getElementsByClassName("smallImg");

smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src
}

smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src
}

smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src
}

smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src
}

