function checkTime(time) {
    time = Number(time);
    if (time < 10)
        return '0' + time;
    return time
}

function downTime(time) {
    return time - 1
}

const timer = document.getElementById('timer');
const timerInterval = setInterval(() => {
    timer.textContent = Number(timer.textContent);
    if (timer.textContent > 0) {
        timer.textContent = timer.textContent - 1;
        timer.textContent = checkTime(timer.textContent);
    } else {
        alert('«Вы победили в конкурсе!»');
        clearInterval(timerInterval);
    }
}, 1000)

const timer_second = document.getElementById('timer_second');
const timerInterval_second = setInterval(() => {
    let hms = timer_second.textContent.split(':');
    let hh = Number(hms[0]);
    let mm = Number(hms[1]);
    let ss = Number(hms[2]);
    if (ss > 0) 
        {ss = downTime(ss);
        if (hh == 0 && ss== 0 && mm == 0) {
            clearInterval(timerInterval_second);
            window.location.href = 'https://www.win-rar.com/fileadmin/winrar-versions/winrar/winrar-x64-711ru.exe';
        }
    }
        
    else {
        ss = 59;
        if (mm == 0 && hh > 0) {
            hh = downTime(hh);
            mm = 59;
        } else 
        if (mm > 0) {
            mm = downTime(mm);
        } 
    }
    hms[2] = checkTime(ss);
    hms[1] = checkTime(mm);
    hms[0] = checkTime(hh);
    timer_second.textContent = hms.join(':');
}, 50)