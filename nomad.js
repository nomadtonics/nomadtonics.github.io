// tab title
const title = document.querySelector('title')
title.style.textTransform = 'uppercase'
// root div of the app
const nomad = document.getElementById('nomad')
// navigation bar for the app
const navbar = document.createElement('nav')
// set navigation bar id
navbar.setAttribute('id', 'navbar')
// content to be displayed
navbar.innerHTML = `
<ul id='logo-container'>
<li id='logo-container'><img src='./logo.png' alt='no mad logo' id='logo-image'></li>
</ul>
<ul id='menu-items'>
<li id='menu-item'>login</li>
<li id='menu-item'>sign up</li>
</ul>`
const mainsection = document.createElement('section')
mainsection.innerHTML = `
<h1 id='mainsecheading'>no mad</h1>
<p id='mainsecpara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, voluptatibus. Soluta illo officia repudiandae ipsam delectus reiciendis, modi, explicabo consequuntur voluptate nihil accusantium quaerat quibusdam! Nulla sequi quod molestias? Illum!</p>
<span id='small-text'></span>`
mainsection.setAttribute('id', 'mainsection')
const mainfooter = document.createElement('footer')
document.body.appendChild(navbar)
document.body.appendChild(mainsection)
const titlenlogo = document.createElement('img')
titlenlogo.setAttribute('id', 'titlenlogo')
titlenlogo.src = 'logo.png'
nomad.appendChild(titlenlogo)