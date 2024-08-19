export function navbar(){
    const nav = document.createElement('nav')
    nav.setAttribute('id', 'navbar')
    nav.innerHTML = `
    <ul><li>login</li><li>sign up</li></ul>`
    return nav
}
export function mainsection(){
    const sec = document.createAttribute('section')
    sec.setAttribute('id', 'mainsection')
    return sec
}