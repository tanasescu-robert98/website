function show_player1_win() 
{
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") 
    {
      x.style.display = "block";
    } 
    else 
    {
      x.style.display = "none";
    }
    var bla3 = document.getElementById("myDIV3");
    bla3.style.display = "none";
    var bla4 = document.getElementById("myDIV4");
    bla4.style.display = "none";
}

function show_player2_win() 
{
    var a = document.getElementById("myDIV2");
    if (a.style.display === "none") 
    {
      a.style.display = "block";
    } 
    else 
    {
      a.style.display = "none";
    }
    var bla5 = document.getElementById("myDIV3");
    bla5.style.display = "none";
    var bla6 = document.getElementById("myDIV4");
    bla6.style.display = "none";
}

function show_TIE() 
{
    var z = document.getElementById("myDIV5");
    if (z.style.display === "none") 
    {
      z.style.display = "block";
    } 
    else 
    {
      z.style.display = "none";
    }
    var bla7 = document.getElementById("myDIV3");
    bla7.style.display = "none";
    var bla8 = document.getElementById("myDIV4");
    bla8.style.display = "none";
}

function set_x_or_0(e1)
{
  var bla = document.getElementById("myDIV3");
  if(document.body.style.background == '')
  {
    bla.style.backgroundColor = "rgb(255,255,255)";
    bla.innerHTML = "<span style='color:#000000'> Have fun! </span>";
  }
  else if(document.body.style.background == 'powderblue')
  {
    bla.style.backgroundColor = "rgb(176,224,230)";
    bla.innerHTML = "<span style='color:#FFFFFF'> Have fun! </span>";
  }
  else if(document.body.style.background == 'black')
  {
    bla.style.backgroundColor = "rgb(0,0,0)";
    bla.innerHTML = "<span style='color:#FFFFFF'> Have fun! </span>";
  }

  var bla2 = document.getElementById("myDIV4");
  if(document.body.style.background == '')
  {
    bla2.style.backgroundColor = "rgb(255,255,255)";
    bla2.innerHTML = "<span style='color:#000000'> Have fun! </span>";
  }
  else if(document.body.style.background == 'powderblue')
  {
    bla2.style.backgroundColor = "rgb(176,224,230)";
    bla2.innerHTML = "<span style='color:#FFFFFF'> Have fun! </span>";
  }
  else if(document.body.style.background == 'black')
  {
    bla2.style.backgroundColor = "rgb(0,0,0)";
    bla2.innerHTML = "<span style='color:#FFFFFF'> Have fun! </span>";
  }
  if(e1.innerHTML == "0" || e1.innerHTML == "X")
          return;    
      if(GAME_OVER == 0)
      {
        N++;
        if(N % 2 != first_choice)
        {
          e1.style.backgroundColor = "rgb(35,182,255)";
          e1.innerHTML = "X";
          e1.disabled = true;
        }
        else
        {
          e1.style.backgroundColor = "rgb(162,46,240)";
          e1.innerHTML = "0";
          e1.disabled = true;
        }
        console.log(N);
        check_endgame();
      }
}

function check_endgame()
{
      var button1 = document.getElementById("button1");
      var button2 = document.getElementById("button2");
      var button3 = document.getElementById("button3");
      var button4 = document.getElementById("button4");
      var button5 = document.getElementById("button5");
      var button6 = document.getElementById("button6");
      var button7 = document.getElementById("button7");
      var button8 = document.getElementById("button8");
      var button9 = document.getElementById("button9");
      if(button1.innerHTML == button2.innerHTML && button1.innerHTML == button3.innerHTML && button2.innerHTML == button3.innerHTML && (button1.innerHTML == "X" || button1.innerHTML == "0")) 
      {
        button1.style.backgroundColor = "rgb(247,165,58)";
        button2.style.backgroundColor = "rgb(247,165,58)";
        button3.style.backgroundColor = "rgb(247,165,58)";
        if(N % 2 != first_choice)
        show_player1_win();
        else
        show_player2_win();
        GAME_OVER = 1;
        return;
      }
      if(button4.innerHTML == button5.innerHTML && button4.innerHTML == button6.innerHTML && button5.innerHTML == button6.innerHTML && (button4.innerHTML == "X" || button4.innerHTML == "0")) 
      {
        button4.style.backgroundColor = "rgb(247,165,58)";
        button5.style.backgroundColor = "rgb(247,165,58)";
        button6.style.backgroundColor = "rgb(247,165,58)";
        if(N % 2 != first_choice)
        show_player1_win();
        else
        show_player2_win();
        GAME_OVER = 1;
        return;
      }
      if(button7.innerHTML == button8.innerHTML && button7.innerHTML == button9.innerHTML && button8.innerHTML == button9.innerHTML && (button7.innerHTML == "X" || button7.innerHTML == "0")) 
      {
        button7.style.backgroundColor = "rgb(247,165,58)";
        button8.style.backgroundColor = "rgb(247,165,58)";
        button9.style.backgroundColor = "rgb(247,165,58)";
        if(N % 2 != first_choice)
        show_player1_win();
        else
        show_player2_win();
        GAME_OVER = 1;
        return;
      }
      if(button1.innerHTML == button4.innerHTML && button1.innerHTML == button7.innerHTML && button4.innerHTML == button7.innerHTML && (button1.innerHTML == "X" || button1.innerHTML == "0")) 
      {
        button1.style.backgroundColor = "rgb(247,165,58)";
        button4.style.backgroundColor = "rgb(247,165,58)";
        button7.style.backgroundColor = "rgb(247,165,58)";
        if(N % 2 != first_choice)
        show_player1_win();
        else
        show_player2_win();
        GAME_OVER = 1;
        return;
      }
      if(button2.innerHTML == button5.innerHTML && button2.innerHTML == button8.innerHTML && button5.innerHTML == button8.innerHTML && (button2.innerHTML == "X" || button2.innerHTML == "0")) 
      {
        button2.style.backgroundColor = "rgb(247,165,58)";
        button5.style.backgroundColor = "rgb(247,165,58)";
        button8.style.backgroundColor = "rgb(247,165,58)";
        if(N % 2 != first_choice)
        show_player1_win();
        else
        show_player2_win();
        GAME_OVER = 1;
        return;
      }
      if(button3.innerHTML == button6.innerHTML && button3.innerHTML == button9.innerHTML && button6.innerHTML == button9.innerHTML && (button3.innerHTML == "X" || button3.innerHTML == "0")) 
      {
        button3.style.backgroundColor = "rgb(247,165,58)";
        button6.style.backgroundColor = "rgb(247,165,58)";
        button9.style.backgroundColor = "rgb(247,165,58)";
        if(N % 2 != first_choice)
        show_player1_win();
        else
        show_player2_win();
        GAME_OVER = 1;
        return;
      }
      if(button1.innerHTML == button5.innerHTML && button1.innerHTML == button9.innerHTML && button5.innerHTML == button9.innerHTML && (button1.innerHTML == "X" || button1.innerHTML == "0")) 
      {
        button1.style.backgroundColor = "rgb(247,165,58)";
        button5.style.backgroundColor = "rgb(247,165,58)";
        button9.style.backgroundColor = "rgb(247,165,58)";
        if(N % 2 != first_choice)
        show_player1_win();
        else
        show_player2_win();
        GAME_OVER = 1;
        return;
      }
      if(button7.innerHTML == button5.innerHTML && button7.innerHTML == button3.innerHTML && button5.innerHTML == button3.innerHTML && (button7.innerHTML == "X" || button7.innerHTML == "0")) 
      {
        button7.style.backgroundColor = "rgb(247,165,58)";
        button5.style.backgroundColor = "rgb(247,165,58)";
        button3.style.backgroundColor = "rgb(247,165,58)";
        if(N % 2 != first_choice)
        show_player1_win();
        else
        show_player2_win();
        GAME_OVER = 1;
        return;
      }
      if( (button1.innerHTML == "X" || button1.innerHTML == "0") && (button2.innerHTML == "X" || button2.innerHTML == "0") && (button3.innerHTML == "X" || button3.innerHTML == "0") && (button4.innerHTML == "X" || button4.innerHTML == "0") && (button5.innerHTML == "X" || button5.innerHTML == "0")
      && (button6.innerHTML == "X" || button6.innerHTML == "0") && (button7.innerHTML == "X" || button7.innerHTML == "0") && (button8.innerHTML == "X" || button8.innerHTML == "0") && (button9.innerHTML == "X" || button9.innerHTML == "0"))
      {
        show_TIE();
        GAME_OVER =1;
        return;
      }
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}