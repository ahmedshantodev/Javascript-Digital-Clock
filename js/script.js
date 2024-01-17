function clock() {
    let now = new Date()

    let dayName = now.toLocaleString("default" , {weekday: "long"});
    let monthName = now.toLocaleString("default" , {month: "short"});
    let DayNumber = now.getDate()
    let year = now.getFullYear()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let secound = now.getSeconds()
    let period = "am"

    // set the time period (am/pm)
    if (hour >= 12) {
        period = "pm"
    }
    // set the 12 hour clock formet
    if (hour >= 12) {
        hour = hour % 12
    }
    // add the 0 for singe digit time
    if (hour < 10) {
        hour = "0" + hour
    }
    if (minute < 10) {
        minute = "0" + minute
    }
    if (secound < 10) {
        secound = "0" + secound
    }
    if (DayNumber < 10) {
        DayNumber = "0" + DayNumber
    }

    // date
    document.querySelector("#dayName").innerHTML = dayName + ",";
    document.querySelector("#month").innerHTML = monthName;
    document.querySelector("#dayNumber").innerHTML = DayNumber + ",";
    document.querySelector("#year").innerHTML = year;

    // time
    document.querySelector("#hour").innerHTML = hour;
    document.querySelector("#minutes").innerHTML = minute;
    document.querySelector("#secound").innerHTML = secound;
    document.querySelector("#period").innerHTML = period;
}

let updateClock = setInterval(clock , 1000)
