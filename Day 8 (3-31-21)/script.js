function magicResponse() {
    var userQuestion = document.getElementById("input").value;
    document.getElementById("questionReturn").innerHTML = userQuestion;

    console.log(userQuestion);

    var randomNumber = (Math.floor(Math.random() * 10 + 1));

    switch (randomNumber) {
        case 1:
            answer = "No.";
            break;
        case 2:
            answer = "Yes.";
            break;
        case 3:
            answer = "I'll get back you you...";
            break;
        case 4:
            answer = "It doesn't seem promising.";
            break;
        case 5:
            answer = "I have no clue...";
            break;
        case 6:
            answer = "Not for the foreseeable future.";
            break;
        case 7:
            answer = "Possibly...";
            break;
        case 8:
            answer = "Most Definitely.";
            break;
        case 9:
            answer = "Maybe *shrug*";
            break;
        case 10:
            answer = "*Silence*";
            break;
    }

    return answer;
    document.getElementById("reply").innerHTML = answer;

}