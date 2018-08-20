// enter variables here
 var target = Math.floor((Math.random() * (120-19)) + 19);   //19-200
    var xOne = Math.floor((Math.random() * 12) + 1);               //1-12
    var xTwo = Math.floor((Math.random() * 12) + 1);
    var xThree = Math.floor((Math.random() * 12) + 1);
    var xFour = Math.floor((Math.random() * 12) + 1);
    var wins = 0;
    var losses = 0;
    var overTarget = false;
    var userScore = 0;

console.log(target, xOne, xTwo, xThree, xFour);


$(document).ready(function() {
    console.log('ready');
   

    function reset(){
        target = Math.floor((Math.random() * (120-19)) + 19);
        xOne = Math.floor((Math.random() * 12) + 1);
        xTwo = Math.floor((Math.random() * 12) + 1);
        xThree = Math.floor((Math.random() * 12) + 1);
        xFour = Math.floor((Math.random() * 12) + 1);
    };

   $('#target').text(target);

    $('#xOne').on('click', function()
    {
        userScore = userScore + xOne;
        $('#current').text(userScore);
        if (userScore < target) {
            overTarget = false;
            return;
        } else if (userScore === target){
            wins++;
            $('#wins').text(wins);
            reset();
        } else {
            overTarget = true;
            losses++;
            $('#losses').text(losses);
            reset();
        };
        
    });

    $('#xTwo').on('click', function()
    {
        userScore = userScore + xTwo;
        $('#current').text(userScore);

        if (userScore < target) {
            overTarget = false;
            return;
        } else if (userScore === target){
            wins++;
            $('#wins').text(wins);
            reset();
        } else {
            overTarget = true;
            losses++;
            $('#losses').text(losses);
            reset();
        };
        
    });
    
    $('#xThree').on('click', function()
    {
        userScore = userScore + xThree;
        $('#current').text(userScore);

        if (userScore < target) {
            overTarget = false;
            return;
        } else if (userScore === target){
            wins++;
            $('#wins').text(wins);
            reset();
        } else {
            overTarget = true;
            losses++;
            $('#losses').text(losses);
            reset();
        };
    });
    
    $('#xFour').on('click', function()
    {
        userScore = userScore + xFour;
        $('#current').text(userScore);

        if (userScore < target) {
            overTarget = false;
            return;
        } else if (userScore === target){
            wins++;
            $('#wins').text(wins);
            reset();
        } else {
            overTarget = true;
            losses++;
            $('#losses').text(losses);
            reset();
        };
        
    });



});
    


    
   

   




