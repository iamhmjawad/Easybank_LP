const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')
const body = document.querySelector('body')


btnHamburger.addEventListener('click', function () {
    if (header.classList.contains('open')) {
        body.classList.remove('noscroll')
        header.classList.remove('open');
        fadeElems.forEach(element =>{
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        });
      
    }
    else {
        body.classList.add('noscroll')
        header.classList.add('open');
        fadeElems.forEach(element => {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });    
    }
})