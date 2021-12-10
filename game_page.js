player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + ":";
document.getElementById("player2_name").innerHTML = player_2_name + ":"; 

document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Question turn-" + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer turn-" + player_2_name;

function Send()
{
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lower case = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    CharAt2 = word.charAt(length_divide_2);
    console.log(CharAt2);
   
    length_minus_1 = word.length-1;
    CharAt3 = word.charAt(length_minus_1);
    console.log(CharAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_CharAt2 = remove_charAt1.replace(CharAt2, "_");
    remove_CharAt3 = remove_CharAt2.replace(CharAt3, "_");
    console.log(remove_CharAt3);
   
    question_word = "<h4 id='word-display> Q. " +remove_CharAt3 + "</h4>";
input_box = "<br> Answer: <input type='text' id='input__box'>";
check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}
question_turn = "player_1";
answer_turn = "player_2";

function check() 
{
    get_answer = document.getElementById("input__box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case-" + answer);
    
    if (answer_turn == "player_1")
    {
    player_1_score = player_1_score + 1;
    document.getElementById("player1_score").innerHTML= player_1_score;


}
else 
    {
        player_2_score = player_2_score + 1;
        document.getElementById("player2_score").innerHTML= player_2_score;
    
    }
    
if (question_turn == "player_1")
{

question_turn = "player_2";
document.getElementById("player_question").innerHTML="question turn - "+player_2_name;


}
else{
    question_turn = "player_1";
document.getElementById("player_question").innerHTML="question turn - "+player_1_name;

}
if (answer_turn == "player_1")
{

answer_turn = "player_2";
document.getElementById("player_answer").innerHTML="answer turn - "+player_2_name;


}
else{
    answer_turn = "player_1";
document.getElementById("player_answer").innerHTML="answer turn - "+player_1_name;

}
document.getElementById("output").innerHTML="";
}
                                                                                                                                                                                                                                                                                                                                                                