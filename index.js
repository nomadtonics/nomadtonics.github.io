const root = document.getElementById('root')
const poptitle = document.createElement('h1')
poptitle.innerHTML = 'nomadtonics'.toUpperCase()
poptitle.setAttribute('id', 'noicetomlink')
poptitle.addEventListener('click', () => {
    window.location.href = '/'
})
// root.appendChild(poptitle)
const navbar = document.createElement('nav')
navbar.setAttribute('id', 'popnav')
navbar.appendChild(poptitle)
const menu = document.createElement('ul')
menu.setAttribute('id', 'popmenu')
const menuitem = document.createElement('li')
menuitem.setAttribute('id', 'menuitem')
menu.appendChild(menuitem)
navbar.appendChild(menu)
root.appendChild(navbar)
const popsection = () => {
    const sec = document.createElement('section')
    sec.setattribute('id', 'popsection')
    return sec
}
const lfh = document.createElement('h3')
lfh.setAttribute('id', 'loginformheading')
lfh.innerHTML = 'login'
popsection.appendChild(lfh)
root.appendChild(popsection())