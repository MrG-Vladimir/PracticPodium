function main()
{
    let buttonProfile = document.querySelector(".button-profile");
    function clickProfile()
    {
        document.location.href = "profile.html"
    }
    buttonProfile.addEventListener("click", clickProfile);


    var countDownDate = new Date("January 01, 2021 00:00:00").getTime();
    var x = setInterval(function() 
    {
        var now = new Date().getTime();
    
        var distance = countDownDate - now;
    
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        document.getElementById("salle").innerHTML = days + "д " + hours + "ч "
        + minutes + "м " + seconds + "с ";
    
    if (distance < 0) 
        {
            clearInterval(x);
            document.getElementById("salle").innerHTML = "EXPIRED";
        }
    }, 1000);




}


main();