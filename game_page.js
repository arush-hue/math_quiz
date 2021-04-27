player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - " + player2_name;

q_t="player1";
a_t="player2";
function send()
{
    number1=document.getElementById("word").value;
    number2=document.getElementById("word2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    console.log("actual answer"+actual_answer);

    question="<h4>" + number1 + "x" +number2+ "</h4>";
    input="<br>Answer:<input type='text' id='input_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    row=question+input+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
    document.getElementById("word2").value="";
}
function check()
{
    get_answer=document.getElementById("input_box").value;
    console.log(get_answer);
    if (get_answer==actual_answer)
    {
        if (a_t=="player1")
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else
        {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if (q_t=="player1")
    {
        q_t="player2";
        document.getElementById("player_question").innerHTML="Question Turn - "+player2_name;
    }
    else
    {
        q_t="player1";
        document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
    }
    if(a_t=="player1")
    {
        a_t="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
    }
    else
    {
        a_t="player1"
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}