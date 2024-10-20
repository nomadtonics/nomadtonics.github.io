// landing page
const nomadhtml = document.querySelectorAll('html');
nomadhtml.forEach((params)=> {
  params.style.backgroundColor = '#001928';
  params.style.color = 'abcdef';
  params.style.width = '100vw';
  params.style.height = '100vh';
  params.style.alignContent = 'center';
  params.style.justifyContent = 'center';
})
const nomadbody = document.querySelectorAll('body');
nomadbody.forEach((params)=> {
  params.style.backgroundColor = '#001928';
  params.style.color = 'abcdef';
  params.style.maxWidth = '100vw';
  params.style.maxHeight = '100vh';
  params.style.alignContent = 'center';
  params.style.justifyContent = 'center';
})