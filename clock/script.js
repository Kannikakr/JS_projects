let a, data, time;

const obj = {
    weekday : 'long',
    year : 'numeric',
    month : 'long',
    day : 'numeric'
};

setInterval(() =>{
    a = new Date();
 time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();

 date = a.toLocaleDateString(undefined, obj);
console.log(time, date);
document.getElementById('time').innerText = time + '\n on ' + date;
}, 1000);