var
boton=document.querySelector(".header_icono")
var
menu=document.querySelector(".header_nav")
var cont=0

boton.onclick=function(){
  if (cont%2==0){
    menu.classList.add("header_nav--active")
    menu.classList.remove("header_nav--disabled")
  }

  else{
    menu.classList.remove("header_nav--active")
    menu.classList.add("header_nav--disabled")
  }

  cont++
}
