function updateDate() {
    const today = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dayName = days[today.getDay()];
    let monthName = months[today.getMonth()];
    let date = today.getDate();
    let year = today.getFullYear();
    document.getElementById("day").innerText = dayName + " , ";
    document.getElementById("date").innerText =`${monthName} ${date} - ${year}`;
}
updateDate();
setInterval(updateDate,1000);