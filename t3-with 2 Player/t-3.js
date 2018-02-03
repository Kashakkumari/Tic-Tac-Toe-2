var x = "ximg.png";
var o = "oimg.png";
var blank = "blank.png";
var pause = 0;
var all = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var temp="";
var ok = 0;
var chance = 0;
var t = 0;
var User_Score = 0;
var Computer_Score = 0;
var Tied_Score = 0;

function help() {
                alert("Welcome to Tic-Tac-Toe!  You play as the X's and the computer is the O's.Select the square you want to put your X into by clicking them.  You cannot occupy a square that is already occupied. The first player to get three squares in a row wins.  Good Luck!!")
           }		   
function logicOne() {
            if (((a==1)&&(b==1)&&(c==1))||((a==1)&&(d==1)&&(g==1))|| ((a==1)&&(e==1)&&(i==1)) ||((b==1)&&(e==1)&&(h==1))||((d==1)&&(e==1)&&(f==1))||((g==1)&&(h==1)&&(i==1)) || ((c==1)&&(f==1)&&(i==1)) ||((g==1)&&(e==1)&&(c==1)))  all=1;
            if (((a==2)&&(b==2)&&(c==2))|| ((a==2)&&(d==2)&&(g==2))|| ((a==2)&&(e==2)&&(i==2))||  ((b==2)&&(e==2)&&(h==2))|| ((d==2)&&(e==2)&&(f==2))|| ((g==2)&&(h==2)&&(i==2))|| ((c==2)&&(f==2)&&(i==2))|| ((g==2)&&(e==2)&&(c==2)))  all=2;    
            if ((a != 0)&&(b != 0)&&(c != 0)&&(d != 0)&&(e != 0)&&(f != 0)&&(g != 0)&&(h != 0)&&(i != 0)&&(all == 0)) all = 3;    }	 
function clearOut() {
              document.game.you.value="0";
              document.game.computer.value="0";
              document.game.ties.value="0";       }		
function checkSpace() {
        if ((temp=="A")&&(a==0)) {
                ok=1;
                if (chance==0) a=1;
                if (chance==1) a=2;
                }
        if ((temp=="B")&&(b==0)) {
                ok=1;
                if (chance==0) b=1;
                if (chance==1) b=2;
                }
        if ((temp=="C")&&(c==0)) {
                ok=1;
                if (chance==0) c=1;
                if (chance==1) c=2;
                }
        if ((temp=="D")&&(d==0)) {
                ok=1;
                if (chance==0) d=1;
                if (chance==1) d=2;
                }
        if ((temp=="E")&&(e==0)) {
                ok=1;
                if (chance==0) e=1;
                if (chance==1) e=2;
                }
        if ((temp=="F")&&(f==0)) {
                ok=1
                if (chance==0) f=1;
                if (chance==1) f=2;
                }
        if ((temp=="G")&&(g==0)) {
                ok=1
                if (chance==0) g=1;
                if (chance==1) g=2;
                }
        if ((temp=="H")&&(h==0)) {
                ok=1;
                if (chance==0) h=1;
                if (chance==1) h=2;
                }
        if ((temp=="I")&&(i==0)) {
                ok=1;
                if (chance==0) i=1;
                if (chance==1) i=2;
                                     }    }
function User_Choice(chName) {
	var rem=t%2;
	if(rem==0) {
		     pause = 0;
             if (all!=0) ended();
             if (all==0) {
                  chance= 0;
                  ok = 0;
                  temp=chName;
                  checkSpace();
                  if (ok==1)  document.images[chName].src = x;  
                  if (ok==0)taken();
                  process();
		    	  t++;
                      }  	}
	else{
		pause = 0;
        if (all!=0) ended();
        if (all==0) {
              chance= 1;
              ok = 0;
              temp=chName;
              checkSpace();
              if (ok==1)  document.images[chName].src = o;    
              if (ok==0)taken();
              process();
			  t++;
                  }   }    }
function taken() {
                alert("That square is already occupied.  Please select another square.")
                pause=1;   }
function ended() {
                 alert("The game has already ended. To play a new game click the Play Again button.")   }
function process() {
                   logicOne();
                   if (all==1){ alert("Player1 won, congratulations!"); User_Score++; }
                   if (all==2){ alert("Player2 won, congratulations!"); Computer_Score++; }
                   if (all==3){ alert("Opps! We tied."); Tied_Score++; }
                   if (all!=0) {
                        document.game.you.value = User_Score;
                        document.game.computer.value = Computer_Score;
                        document.game.ties.value = Tied_Score;
                        }    }
function playAgain() {
                  if (all==0) {
                              if(confirm("This will restart the game and clear all the current scores. OK?")) reset();
                             }
                  if (all>0) reset();    }			
function reset() {
                   all = 0;
                   a = 0;
                   b = 0;
                   c = 0;
                   d = 0;
                   e = 0;
                   f = 0;
                   g = 0;
                   h = 0;
                   i = 0;
                   temp="";
                   ok = 0;
                   chance = 0;
                   document.images.A.src= blank;
                   document.images.B.src= blank;
                   document.images.C.src= blank;
                   document.images.D.src= blank;
                   document.images.E.src= blank;
                   document.images.F.src= blank;
                   document.images.G.src= blank;
                   document.images.H.src= blank;
                   document.images.I.src= blank;
               }