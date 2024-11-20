

const view1=document.querySelector('.view-1');
const pop=document.querySelector('.popup')
function popUp() {
    pop.classList.toggle('visible')
}
view1.addEventListener('click',popUp)