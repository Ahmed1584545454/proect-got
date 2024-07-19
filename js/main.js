let burger = document.getElementById("bur")
let menu = document.getElementById("menu")
let them = document.getElementById("them")
let dark = document.body
let com = document.getElementById("con-m")
let con = document.getElementById("con-con")
burger.addEventListener("click",()=>{
	menu.classList.toggle("open")
	burger.classList.toggle("open")
	com.classList.toggle("hide")
	con.classList.toggle("hide")
})
them.addEventListener("click",()=>{
	dark.classList.toggle("darkMode")
	them.classList.toggle("hide")
})


//СЛАЙДЕР