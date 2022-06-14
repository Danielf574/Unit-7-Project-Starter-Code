$("button").click(function() {
    let questionOne = $(".answer-one").val();
    let questionTwo = $(".answer-two").val();
    let questionThree = $(".answer-three").val();
    let meters = 75;
    let metersperMinute = questionTwo * meters * 28;
    $(".fortune-display").append("<p>" + questionOne + " will have walked " + metersperMinute + " meters by the year 2050 and likes " + questionThree + "</p>");
});