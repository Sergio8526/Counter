//let mostrar = document.querySelector('.mostrar')
let counter = document.getElementById('mostrar')
let increment = 0;
let addbutton = document.getElementById("add")

addbutton.addEventListener('click', function() {
increment = increment + 1
console.log(increment)

counter.innerHTML= increment

})

let subtractbutton = document.getElementById('subtract')

subtractbutton.addEventListener('click', function() {
    increment = increment - 1
    console.log(increment)

    counter.innerHTML= increment
} )

let resetbutton = document.getElementById('reset')

resetbutton.addEventListener('click', function() {
    increment = 0
    console.log(increment)

    counter.innerHTML= increment
} )












