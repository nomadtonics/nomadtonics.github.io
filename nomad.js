// tab title
const title = document.querySelector('title')
title.style.textTransform = 'uppercase'
// root div of the app
const nomad = document.getElementById('nomad')
const navbar = document.createElement('nav')
navbar.setAttribute('id', 'navbar')
navbar.innerHTML = `
<ul id='nav-item'>
<img src='./logo.png' alt='no mad logo'>
</ul>
<ul id='nav-item'>
<li>login</li>
<li>sign up</li>
</ul>`
const mainsection = document.createElement('section')
mainsection.innerHTML = `
<h1 id='mainsecheading'>no mad</h1>
<p id='mainsecpara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, voluptatibus. Soluta illo officia repudiandae ipsam delectus reiciendis, modi, explicabo consequuntur voluptate nihil accusantium quaerat quibusdam! Nulla sequi quod molestias? Illum!</p>
<spa></span>`
mainsection.setAttribute('id', 'mainsection')
const mainfooter = document.createElement('footer')
nomad.appendChild(navbar)
nomad.appendChild(mainsection)