const text = document.getElementById('text')
const amount = document.getElementById('amount')
const date = document.getElementById('date')
const time = document.getElementById('time')
const saveBtn = document.getElementById('save')
const tbody = document.querySelector('tbody')
const box = document.querySelector('.box')
const total = document.querySelector('.total')
const err1 = document.querySelector('.text-txt')
const err2 = document.querySelector('.amount-txt')

let boxArr = []
let totalArr = []

saveBtn.addEventListener('click', saveExpense)

function saveExpense(e) {

   
    if(text.value === '' || amount.value === '') {
        err1.classList.add('err')
        err2.classList.add('err')
        setTimeout(()=> err2.classList.remove('err'), 2000)
        setTimeout(()=> err1.classList.remove('err'), 2000)
    }
    else {
        const tr = document.createElement('tr')
        tr.style.textAlign = 'center'
    
    tr.innerHTML = `
    <td>${text.value}</td>
    <td>${amount.value}</td>
    <td>${date.value}</td>
    <td>${time.value}</td>
    <td ><i class="fa fa-remove" onclick="Delete(this)"></td>
    `
    
    tbody.appendChild(tr)
    
    
   
    
    }
    boxArr.push(text.value)
    boxArr.forEach((arr, index) => {
      
        box.innerHTML = `${index + 1}`
    })
    
    calTotal()



    
    clearFields()
    e.preventDefault()

    
    
}

function calTotal() {
    
    if(isNaN(parseInt(amount.value))) {
        total.innerHTML = 0
    } else {
        let temp4 = totalArr.push(parseInt(amount.value))
        let temp = totalArr.reduce((acc, item) => {
            return acc + item
        }, 0)
        total.innerHTML = `${temp}`
    }
    
    
 

}

// Modal

const modalContainer = document.querySelector('.modal-container')
const openModal  = document.querySelector('.open-modal')
const closeModal  = document.querySelector('.close-modal')


openModal.addEventListener('click', reviewMes)

function reviewMes() {
   if(total.innerHTML < 5000) {
       modalContainer.innerHTML  = `<h2>Nice Spending!..</h2>
       <p>${total.innerHTML} is not bad for a day </p>
       `
   } 
    
}

closeModal.addEventListener('click', function() {
    modalContainer.innerHTML = `
    <h1>SEE REVIEW</h1>
    `
})



    




function clearFields() {
    text.value = ''
    amount.value = ''
    date.value = ''
    time.value = ''
}
function Delete(e) {
    e.parentElement.parentElement.remove()
    boxArr.pop(text.value)
    boxArr.forEach((arr, index) => {
      
        box.innerHTML = `${index + 1}`
    })
    totalArr.pop(parseInt(amount.value))
    let temp = totalArr.reduce((acc, item) => {
        return acc + item
    }, 0)
    
    total.innerHTML = `${temp}`

}

