const girrafe = document.getElementById('girf');
const jumpscare = document.getElementById('jumpscare');
const path = window.innerWidth;

function randomPath(){
    girrafe.style.left = `${(Math.random() * path)}px`
}

setInterval(() => {
    jumpscare.style.opacity = 1

    setTimeout(() => {
        jumpscare.style.opacity = 0
    }, 500);
}, 4000);

setTimeout(() => {
    randomPath();
}, 3000);

girrafe.addEventListener('transitionend',()=>{
    setTimeout(() => {
        randomPath();
    }, 3000);
})

