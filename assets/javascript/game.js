$(document).ready(function () { //Wait till all the elements are loaded

    var targetScore = 0; //Random value asigned as target.
    var currentScore = 0; //Actual score of the user.
    // var redCrystal = 0; //Random value asigned to the red crystal.
    // var blueCrystal = 0; //Random value asigned to the blue crystal.
    // var yellowCrystal = 0; //Random value asigned to the yellow crystal.
    // var magCrystal = 0; //Random value asigned to the magenta crystal.
    var wins = 0; //User wins.
    var losses = 0; //User losses.
    var oldscore = 0;
    var youroldscore = 0;



    function reset() { 
        currentScore = 0; //Reset current score to 0
        targetScore = Math.floor((Math.random() * 101) + 19); //Assign random value to Target Score
        crystals=[]; //This variable will store the 4 random values for the crystals.
        for (i = 0; i < 4; i++) { //Generating the random values for crystals.
            crystals.push(Math.floor((Math.random() * 11) + 1));
        };
        $("#targetScore").text(targetScore);    //Print the new value for targetScore
        $("#currentScore").text(currentScore);  //Print the new value for currentScore
        $("#wins").text("Wins: "+ wins);        //Print the new value for Score - Wins
        $("#losses").text("Losses: " + losses); //Print the new value for Score - Losses]
        $("#yourScore").hide();

        console.log(targetScore, crystals[0], crystals[1], crystals[2], crystals[3]); //Cheating
    };

    reset();

    function playGame() { //Evaluates the winner and display message.
        $("#currentScore").text(currentScore);
        if (currentScore === targetScore) {
            wins++;
            oldscore = targetScore;
            youroldscore = currentScore;
            //alert("Congratulations, You won!");
            $("#result").text("CONGRATULATIONS, YOU WON!!");
            $("#results2").text("The target score was:  " + oldscore + "  Your score was: " + youroldscore);
            reset();

        }
        else if (currentScore > targetScore) { //Evaluates the losser and display message.
            //alert("We're sorry, You Lose!");
            oldscore = targetScore;
            youroldscore = currentScore;
            $("#result").text("SORRY, YOU LOST!");
            $("#results2").text("The target score was:  " + oldscore + "  Your score was: " + youroldscore);
            losses++;
            reset();
        }
        else if (currentScore > 0){
            $("#result").text("");
            $("#results2").text("");
            $("#yourScore").show();
        };


        
    };

    //On click events asigned to each crystal.

    $("#mindStone").on('click', function () {
        currentScore += crystals[0];
        playGame();
    });

    $("#spaceStone").on('click', function () {
        currentScore += crystals[1];
        playGame();
    });

    $("#powerStone").on('click', function () {
        currentScore += crystals[2];
        playGame();
    });

    $("#timeStone").on('click', function () {
        currentScore += crystals[3];
        playGame();
    });

});

