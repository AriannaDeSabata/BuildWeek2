let btnDrop = document.querySelector(".listGuest button")

btnDrop.addEventListener("click", showMenu)

function showMenu(){
    let menu = document.getElementById("menuGuest")
    menu.classList.toggle("hidden")   
}

let btn = document.querySelectorAll("input[type = button]")
let contGuest = document.getElementById("contGuest")
console.log(btn)


btn.forEach(((el)=>{
el.addEventListener("click" , ()=>{

    let cont 
    if(el.classList.contains("plus")){
        cont = el.previousElementSibling
        cont.value = parseInt(cont.value) +1

    }else if(el.classList.contains("less")){
        cont = el.nextElementSibling
        let currentValue =  parseInt(cont.value)

        if(currentValue > 0){
            cont.value = currentValue -1
        }
    }

    let sumGuest = 0
    let numberGuest = document.querySelectorAll("input[type = number]")

    numberGuest.forEach(input=>{
        sumGuest += parseInt(input.value) || 0
    })

    contGuest.innerText = sumGuest
})
}))

