const submenuBtn = document.querySelector('.plus')

const submenu = document.querySelector('.submenu')

submenuBtn.addEventListener('click', function() {
   console.log(123);
    submenu.classList.toggle('show-submenu')
})

// Nav

const nav = document.querySelector('nav')
const btn = document.querySelector('.btns')
const rem = document.querySelector('.fa-remove')

btn.addEventListener('click', function() {
    nav.classList.add('show-nav')
})
rem.addEventListener('click', function() {
    nav.classList.remove('show-nav')
})