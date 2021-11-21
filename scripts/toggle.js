const darkModeBtns = document.querySelectorAll('.dark-mode')

darkModeBtns.forEach((item) => {
    item.addEventListener('click', function() {
        document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')) {
        localStorage.setItem('blackMe', 'enabled')
    } else {
        localStorage.setItem('blackMe', 'disabled')
    }
    })
})


if(localStorage.getItem('blackMe') === 'enabled') {
    document.body.classList.toggle('dark') 
}

//Toggle light and dark mode

// function toggleMode(x) {
//     document.body.style.backgroundColor = x.value
//     if(document.body.style.backgroundColor === 'black') {
//         localStorage.setItem('darkMode', 'enabled')
//         tbody.style.color = 'white'
//     } else {
//         localStorage.setItem('darkMode', 'disabled')
//     }
    
// }
// if(localStorage.getItem('darkMode') == 'enabled') {
//     document.body.style.backgroundColor = 'black'
// }

