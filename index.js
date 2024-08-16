const root = document.getElementById('root')
const poptitle = document.createElement('h1')
poptitle.innerHTML = 'noicetom'.toUpperCase()
poptitle.attributes.setNamedItem('id')
poptitle.addEventListener('click', () => {
    window.location.href = '/noicetom'
})
root.appendChild(poptitle)