// rcube framework starts
r$.subscribe("/r$/viewchange", function (view) {
    if(view=="mobile"){
        r$("#navmenu").css("position","relative");
        r$("#navHNDisp").css("width","85%");
        r$("#navHBDisp").css("width","15%");
    }else{
        r$("#navmenu").css("position","fixed");
        r$("#navHNDisp").css("width","46%");
        r$("#navHBDisp").css("width","4%");
    }
    console.log(view); //shows mobile table desktop
});

r$.subscribe("/r$/onload", function () {
    console.log("page loaded");
    r$("#loginButton").on("click", function () {
        alert("login button clicked");
    });
});
// rcube framework ends