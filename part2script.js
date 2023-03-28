const body = document.getElementById("body");
body.classList.add("backgroundRed");
body.classList.add("white");
body.classList.remove("white");
body.setAttribute("style", "color:white")

if(body.hasAttribute("style"))
{
    body.setAttribute('style', "color:black")


}

const bodyimg = document.getElementById("photoJava");
bodyimg.classList.add("img");

const headerInline = document.getElementById("inline");
headerInline.style.color = 'white';

const pInline = document.getElementById("inlinep");
pInline.style.color = 'lightgreen';