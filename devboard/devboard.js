document.getElementById('shopEase-card-btn').addEventListener('click', function(event){
    event.preventDefault();
    const seopEaseDiget = getTaskAssignedValueByID('Assigned-value');
    const navbarDevboardCount = getDevBoardValueByID('nav-devboard-count');
        alert('Board updated successfully');
        const even = seopEaseDiget - 1;
        const sum = navbarDevboardCount + 1;
        document.getElementById('Assigned-value').innerText = even;
        document.getElementById('nav-devboard-count').innerText = sum;
        this.disabled = true;
        
        
    
})