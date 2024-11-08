for (let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa");
}

for (let i = 25; i >= 5; i -= 5) {
    console.log(i);
}

let timeleft = 5;
const countdown = setInterval(() => {
    console.log(`Time Left is ${timeleft}`);
    timeleft--;

    if (timeleft < 0) {
        clearInterval(countdown);
        console.log('Time is up!');
    }
}, 1000); 
for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}
