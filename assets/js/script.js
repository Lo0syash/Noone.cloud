const burger_click = document.querySelector('.header-burger').addEventListener('click', () =>{
    document.querySelector('.nav').classList.add('active')
});
const burber_close = document.querySelector('.close-burger').addEventListener('click', () =>{
    document.querySelector('.nav').classList.remove('active')
})