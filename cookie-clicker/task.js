const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const speedDisplay = document.getElementById('clicker__speed');
let counerValue = Number(clickerCounter.textContent);
let width = cookie.width;
let flag = true;
console.log(width)
cookie.addEventListener('click',()=> {
    counerValue++;
    const k = (flag == true) ? 1:-1;
    flag = !flag;
    clickerCounter.textContent = counerValue;
    width = width + 30*k;
    cookie.width = width;
    if (counerValue === 1) {
        startTime = Date.now();
    }
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime) / 1000;
    const averageSpeed = counerValue / elapsedTime;
    if (currentTime - startTime != 0) speedDisplay.textContent = averageSpeed.toFixed(2);
}) 