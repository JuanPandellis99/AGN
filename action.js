let btnOpen = document.getElementById ('btn-Open')
let MobileMenu = document.getElementById ('mobile')
let overlayMenu = document.getElementById ('overlay-menu')

btnOpen.addEventListener('click', ()=>{
    MobileMenu.classList.add('abrir-menu')
})

MobileMenu.addEventListener('click', ()=>{
    MobileMenu.classList.remove('abrir-menu')
})

overlayMenu.addEventListener('click', ()=>{
    MobileMenu.classList.remove('abrir-menu')
})