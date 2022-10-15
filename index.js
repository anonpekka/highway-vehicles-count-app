let countEl = document.getElementById("count-el")
// let veH = document.getElementById("veh-btn")
let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("reset-el")
let count = 0

console.log(count)
 
function vehicle() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + ' - '
    resetEl.textContent += countStr
    countEl.textContent = 0
    count = 0

}

function reset() {
    resetEl.textContent = " :" + "  "
}


// console.log(veH)