//let mostrar = document.querySelector('.mostrar')
let counter = document.getElementById('mostrar')
let increment = 0;
let addbutton = document.getElementById("add")

addbutton.addEventListener('click', function() {
increment = increment + 1
console.log(increment)

counter.innerHTML= increment

})

let decro = document.getElementById('mostrar')
let decrement = 0;
let subtractbutton = document.getElementById('subtract')

subtractbutton.addEventListener('click', function() {
    decrement = decrement - increment
    console.log(decrement)

    counter.innerHTML= decrement
} )










