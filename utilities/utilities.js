
//theme color change btn related function

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}


//Task Assigned and navbar task of common innertext related function

function getIdByInnerText(id) {
    let element = document.getElementById(id);
    let value = element.innerText;
    let innerValue = parseInt(value);
    return innerValue;
}



// live day months and year

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



//Congratulations! All tasks are completed alart function

function checkCompletion() {
    let remainingTasks = parseInt(document.getElementById('taskAssignedNumber').innerText);

    if (remainingTasks === 0) {
        alert("Congratulations! All tasks are completed.");
    }
}



//Board Update Successfully ,task assinged ,completed task updet

function handleButtonClick(buttonId, titleId) {
    document.getElementById(buttonId).addEventListener('click', function (event) {
        event.preventDefault();

        // first step
        alert("Board Update Successfully");

        // second step Task Assigned innertext velue to -1
        let innerValue = getIdByInnerText('taskAssignedNumber');
        let sub = innerValue - 1;
        document.getElementById('taskAssignedNumber').innerText = sub;

        // third step nabbar task and +1
        let completeTask = getIdByInnerText('completeTask');
        let sum = completeTask + 1;
        document.getElementById('completeTask').innerText = sum;

        //fourth step Activity Log  History set text and complete  btn disabled
        let innerText = addedValue(titleId, 'activityLogHistoryContainer');
        this.disabled = true; 
        checkCompletion();
    });
}


// Activity Log history create block function

function addedValue(id, inner) {
    let titleElement = document.getElementById(id);
    let finalTitle = titleElement.innerText;
    let currentTime = new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    });

    let text = `You have completed the task ${finalTitle} at ${currentTime}`;
    let innerElement = document.getElementById(inner);
    let newMessage = document.createElement("h1");

    newMessage.className = "bg-[#F4F7FF] p-3 mb-3 font-medium rounded-xl";
    newMessage.innerText = text;
    innerElement.appendChild(newMessage);
}

