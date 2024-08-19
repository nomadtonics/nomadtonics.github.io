// tab title
const title = document.querySelector('title')
title.style.textTransform = 'uppercase'
// root div of the app
const nomad = document.getElementById('nomad')
function navbar(){
    const nav = document.createElement('nav')
    nav.setAttribute('id', 'navbar')
    nav.innerHTML = `
    <ul id='nav-item'>
    <img src='./image' alt='no mad logo'>
    </ul>
    <ul id='nav-item'>
    <li>login</li>
    <li>sign up</li>
    </ul>`
    return nav
}
function mainsection(){
    const sec = document.createAttribute('section')
    sec.innerHTML = `
    <h1 id='mainsecheading'>no mad</h1>
    <p id='mainsecpara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, voluptatibus. Soluta illo officia repudiandae ipsam delectus reiciendis, modi, explicabo consequuntur voluptate nihil accusantium quaerat quibusdam! Nulla sequi quod molestias? Illum!</p>
    <spa></span>`
    sec.setAttribute('id', 'mainsection')
    return sec
}
function mainfooter(){
    constfoot = document.createElement('footer')
    returnfoot
}
nomad.appendChild(navbar)
nomad.appendChild(mainsection)
