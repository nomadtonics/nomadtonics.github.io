export default function nomadtemplate(templatename){
    const newelement = document.createElement(templatename);
    newelement.style.backgroundColor = '#000';
    newelement.style.color = '#fff';
    return newelement;
}