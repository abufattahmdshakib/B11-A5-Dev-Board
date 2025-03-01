function getTaskAssignedValueByID(id) {
    const taskAssigned = document.getElementById(id).innerText;
    const convertedTaskAssined = parseInt(taskAssigned);
    return convertedTaskAssined;
}
function getDevBoardValueByID(id) {
    const navDevboardCount = document.getElementById(id).innerText;
    const convertedNavDevboardCount = parseInt(navDevboardCount);
    return convertedNavDevboardCount;
}