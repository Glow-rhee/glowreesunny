const hamburger=document.querySelector('.hamburger');

const navLinks=document.querySelector('.navigation__links');

// hamburger.addEventListener('click', () =>{
//  if(navLinks.style.display === 'flex'){
//   navLinks.style.display === 'none'
//  }else{
//   navLinks.style.display === 'flex'
//  }
// })


hamburger.addEventListener('click', () =>{
 if(navLinks.style.transform === 'scaleY(1)'){
  navLinks.style.display === 'scaleY(0)'
 }else{
  navLinks.style.display === 'scaleY(1)'
 }
})