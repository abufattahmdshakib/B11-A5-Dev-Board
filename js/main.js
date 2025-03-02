

//theme change btn
document.getElementById('theme-btn').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});


//Discover Something New Today btn 
document
    .getElementById('discover-btn')
    .addEventListener('click', function(){
        window.location.href= 'main.html'
    })


// live day month year
updateDate();
setInterval(updateDate,1000);


//  for six cord
handleButtonClick('shopease-btn', 'ShopEase-title');
handleButtonClick('cloudSync-btn', 'cloudsyne-title');
handleButtonClick('swiftpay-btn', 'swiftpay-title');
handleButtonClick('meta-btn', 'meta-title');
handleButtonClick('googlellc-btn', 'googleLLC-title');
handleButtonClick('Glassdoar-btn', 'Glassdoar-title');
    


// clear histry
document
    .getElementById('clearHistory-Btn')
    .addEventListener('click', function(){
        document.getElementById('activityLogHistoryContainer').innerText= '';
    })
