function update()
{
    player1=document.getElementById("hue").value;
    player2=document.getElementById("hue2").value;
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
    window.location="game_login.html";
}