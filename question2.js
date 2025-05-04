let speedinput =prompt("Enter speed of the car")
speedinput =Number(speedinput)

if (!isNaN(speedinput) && speedinput >= 0) {
    checkspeed(speedinput);
} else {
    alert("Invalid input")
}

function checkspeed(speed) {
    const speedlimit =70;
    const kmperpoint =5;

    if (speed < speedlimit) {
        console.log("Ok")
    } else {
        let points = (speed -speedlimit / kmperpoint);
        if (points >12) {
            console.log('License suspended');
        } else {
            console.log(`points: ${points}`);
        }
    }
}

