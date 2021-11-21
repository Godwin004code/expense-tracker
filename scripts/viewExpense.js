const input = document.querySelector('input')
const btn = document.querySelector('.btna #save')
const items = document.getElementById('collections')
const clearBtn = document.getElementById('clear')


window.addEventListener('DOMContentLoaded', outputInputs)

function outputInputs() {
    let vales;
    if(localStorage.getItem('vales') === null) {
        vales = []
    } else {
        vales = JSON.parse(localStorage.getItem('vales'))
    } 
    vales.forEach((val) => {
        const li = document.createElement('li')
        li.classList.add('list-item')
        li.appendChild(document.createTextNode(val))
        items.appendChild(li)
    })
}


btn.addEventListener('click', function() {
    const li = document.createElement('li')
    li.classList.add('list-item')
    li.appendChild(document.createTextNode(input.value))
    items.appendChild(li)


    saveInputs(input.value)
    input.value =""
    input.focus()
})

function saveInputs(val) {
    let vales;
    if(localStorage.getItem('vales') === null) {
        vales = []
    } else {
        vales = JSON.parse(localStorage.getItem('vales'))
    } 
    vales.push(val)
    localStorage.setItem("vales", JSON.stringify(vales))
}

clearBtn.addEventListener('click', clearList)

function clearList() {
    items.innerHTML = ''
    clearFromLocalStorage()
}

function clearFromLocalStorage() {
    
    console.log(temp4);
    let vales;
    if(localStorage.getItem('vales') === null) {
        vales = []
    } else {
        vales = JSON.parse(localStorage.getItem('vales'))
    } 
    vales.forEach((val, index)=> {
        if(temp4.textContent === val) {
            vales.splice(index, 1)
        }
    })
    localStorage.setItem('vales', JSON.stringify(vales))
}