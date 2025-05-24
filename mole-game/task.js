const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let deadValue = Number(dead.textContent);
let lostValue = Number(lost.textContent);
const holes = document.getElementsByClassName('hole');
Array.from(holes).forEach(element => {
    element.addEventListener('click', ()=>{
        (element.classList.contains('hole_has-mole')) ? deadValue=deadValue + 1 : lostValue=lostValue + 1;
        if (deadValue == 10) alert('ПОБЕДА!'); 
        if (lostValue == 5) alert('ПОТРАЧЕНО!');
        if (lostValue == 5 || deadValue == 10) {
            lostValue = 0;
            deadValue = 0;
        }
        dead.textContent=deadValue;
        lost.textContent=lostValue;
    })
});