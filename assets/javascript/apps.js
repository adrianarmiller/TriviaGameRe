$(document).ready(function() {
    const question1 = {
        question:"WHERE WAS THREE BILLBOARDS FILMED?",
        answers:["Sylva, North Carolina", "Ebbing, Missouri", "Kansas City, Missouri", "Detroit, Michigan"],
        correctAnswer:"Sylva, North Carolina",
    }

    const question2 = {
        question:"WHAT IS THE NAME OF MILDRED'S DAUGHTER?",
        answers:["Hannah", "Abigail", "Angela", "Laney"],
        correctAnswer:"Angela",
    }

    const question3 = {
        question:"WHO DIRECTED THREE BILLBOARDS?",
        answers:["Frances McDormand", "Graham Broadbent", "Martin McDonagh", "Damien Chazelle"],
        correctAnswer: "Martin McDonagh",
    }

    const question4 = {
        question:'FINISH THE PHRASE... "HOW COME..."',
        answers:["Chief Winchester?", "Chief Willoughby?", "Sergeant Donald?", "God?"],
        correctAnswer:"Chief Willougbhy?",
    }


    let correctCounter = 0;
    let incorrectCounter = 0;
    let unansweredCounter = 0;
    let wasClicked1 = 0;
    let wasClicked2 = 0;
    let wasClicked3 = 0;
    let wasClicked4 = 0;
    //wasClicked variables to keep track of unaswered questions.

    let timer;
    let timeLeft = 60;

    function startTimer() {
        $("#display-time-remaining").text("SECONDS REMAINING: "+timeLeft);
        timer = setInterval(function() {  
        $("#display-time-remaining").text("SECONDS REMAINING: " +timeLeft);
        if (timeLeft === 0) {
            clearInterval(timer);
            showScore();
        } else {
            timeLeft--;
        }
    }, 1000);
    }
    

    $("#start").click(function(){
        $("#start").remove();
        clearInterval(timer);
        startTimer();
        playGame();
    });

    //would like to make these radio buttons
    //right now, multiple answers can be clicked and clicked limitless times
    function displayAnswerOptions(array, id, verify){
        for(i = 0; i<array.length; i++){
            let num = i.toString();
            let theQ = $("<button>");
            theQ.text(array[i]);
            theQ.addClass("answers-bttn");
            theQ.attr("id", verify + "-" + num);
            $(id).append(theQ);
        }
    }

    function playGame(){
        $("#display-question-1").text(question1.question);
        $("#display-question-2").text(question2.question);
        $("#display-question-3").text(question3.question);
        $("#display-question-4").text(question4.question);

        displayAnswerOptions(question1.answers, "#display-answers-1", "q1");
        displayAnswerOptions(question2.answers, "#display-answers-2", "q2");
        displayAnswerOptions(question3.answers, "#display-answers-3", "q3");
        displayAnswerOptions(question4.answers, "#display-answers-4", "q4");
        
        

        let finish = $("<button>");
        finish.text("Finish!");
        finish.addClass("finish-bttn");
        finish.attr("id", "finish");
        $(".finish-button").append(finish);

        $("#q1-0").click(function(){
            //CORRECT
            correctCounter++;
            wasClicked1++;
        });

        $("#q1-1").click(function(){
            //NOPE
            incorrectCounter++;
            wasClicked1++;    
        });

        $("#q1-2").click(function(){
            //NOPE
            incorrectCounter++;
            wasClicked1++;      
        });

        $("#q1-3").click(function(){
            //NOPE
            incorrectCounter++;
            wasClicked1++;
        });

        $("#q2-0").click(function(){
            //NOPE
            incorrectCounter++;
            wasClicked2++;  
        });

        $("#q2-1").click(function(){
            //NOPE
            incorrectCounter++;
            wasClicked2++;  
        });

        $("#q2-2").click(function(){
            //CORRECT
            correctCounter++;
            wasClicked2++;   
        });

        $("#q2-3").click(function(){
            //NOPE
            incorrectCounter++;
            wasClicked2++;
        });

        $("#q3-0").click(function(){
            //NOPE
            incorrectCounter++;
            wasClicked3++;  
        });

        $("#q3-1").click(function(){
            //NOPE
            incorrectCounter++;
            wasClicked3++;  
        });

        $("#q3-2").click(function(){
            //CORRECT
            correctCounter++;
            wasClicked3++;   
        });

        $("#q3-3").click(function(){
            //NOPE
            incorrectCounter++;
            wasClicked3++;
        });

        $("#q4-0").click(function(){
            //NOPE
            incorrectCounter++;
            wasClicked4++;  
        });

        $("#q4-1").click(function(){
            //CORRECT
            correctCounter++;
            wasClicked4++;  
        });

        $("#q4-2").click(function(){
            //NOPE
            incorrectCounter++;
            wasClicked4++;
        });

        $("#q4-3").click(function(){
            //NOPE
            incorrectCounter++;
            wasClicked4++;
        });

        $("#finish").click(function(){
            showScore();
        });
    }

    function showScore(){
        $("#game").empty();
        $(".finish-button").empty();
        if(wasClicked1===0){
            unansweredCounter++;
        }
        if(wasClicked2===0){
            unansweredCounter++;
        }
        if(wasClicked3===0){
            unansweredCounter++;
        }
        if(wasClicked4===0){
            unansweredCounter++;
        }

        $("#correct").text("Correct: " +correctCounter);
        $("#incorrect").text("Incorrect: " +incorrectCounter);
        $("#unanswered").text("Unanswered: " +unansweredCounter);
    }

})