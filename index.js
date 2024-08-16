const root = document.getElementById('root')
const poptitle = document.createElement('h1')
poptitle.innerHTML = 'popeye'.toUpperCase()
poptitle.addEventListener('click', () => {
    window.location.href('/noicetom')
})
root.appendChild(poptitle)