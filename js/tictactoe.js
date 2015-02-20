var tictactoe = new Array();
var circles = 0;
var crosses = 0;
var gameover = false;
var winner = new Winner();
$(function(){
	var first = true;
	$(".box").click(function(){
		if(!gameover){
			if(!$(this).hasClass('clicked')){
				if(first){
					tictactoe[$(this).attr('id')] = 'cross';
					$(this).addClass('cross');
					first = false;
					circles++;
					if(circles >= 3){
						showWinner();
					}
				}else{
					tictactoe[$(this).attr('id')] = 'circle';
					$(this).addClass('circle');
					first = true;
					crosses++;
					if(crosses >= 3){
						showWinner();
					}
				}
				$(this).addClass('clicked');
			}
		}else{
			var game = 'O';
			if(winner.player == 'cross'){
				game = "X";
			}
			alert("Jogo finalizado! \nO Jogador: "+game+" Ganhou!");	
		}
	});
});
function Winner(){
	this.numbers;
	this.player;
}
function playAgain(){
	gameover = true;
	$(".play-again").show('slow');
	$(".play-again").click(function(){
		$.each($(".box") , function(i,e){
			$(this).removeClass('winner');
			$(this).removeClass('cross');
			$(this).removeClass('circle');
			$(this).removeClass('clicked');
		});
		gameover = false;
		$(".play-again").show('hide');
	});
}
function showWinner(){
	winner = checkWinner();
	if(winner !== false){
		playAgain();
		$.each(winner.numbers , function(i,e){
			$("#"+e).addClass('winner');
		});
	}
};
function checkWinner(){
	console.log(tictactoe[0]);
	if(tictactoe[0] == tictactoe[3] && tictactoe[0] == tictactoe[6] && tictactoe[0] != undefined){
	//	 x| |
	//	-------
	//	 x| |
	//	-------
	//	 x| |
		win = new Winner();
		win.numbers = [0,3,6];
		win.player = tictactoe[0];
		return win;
	}
	if(tictactoe[1] == tictactoe[4] && tictactoe[1] == tictactoe[7] && tictactoe[1] != undefined){
	//	  |x|
	//	-------
	//	  |x|
	//	-------
	//	  |x|
		win = new Winner();
		win.numbers = [1,4,7];
		win.player = tictactoe[1];
		return win;
	}
	if(tictactoe[2] == tictactoe[5] && tictactoe[2] == tictactoe[8] && tictactoe[2] != undefined){
	//	  | |x
	//	-------
	//	  | |x
	//	-------
	//	  | |x
		win = new Winner();
		win.numbers = [2,5,8];
		win.player = tictactoe[2];
		return win;
	}
	if(tictactoe[0] == tictactoe[1] && tictactoe[0] == tictactoe[2] && tictactoe[0] != undefined){
	//	 x|x|x
	//	-------
	//	  | |
	//	-------
	//	  | |
		win = new Winner();
		win.numbers = [0,1,2];
		win.player = tictactoe[0];
		return win;
	}
	if(tictactoe[3] == tictactoe[4] && tictactoe[3] == tictactoe[5] && tictactoe[3] != undefined){
	//	  | |
	//	-------
	//	 x|x|x
	//	-------
	//	  | |
		win = new Winner();
		win.numbers = [3,4,5];
		win.player = tictactoe[3];
		return win;
	}
	if(tictactoe[6] == tictactoe[7] && tictactoe[6] == tictactoe[8] && tictactoe[6] != undefined){
	//	  | |
	//	-------
	//	  | |
	//	-------
	//	 x|x|x
		win = new Winner();
		win.numbers = [6,7,8];
		win.player = tictactoe[6];
		return win;
	}
	if(tictactoe[2] == tictactoe[4] && tictactoe[2] == tictactoe[6] && tictactoe[2] != undefined){
	//	  | |x
	//	-------
	//	  |x|
	//	-------
	//	 x| |
		win = new Winner();
		win.numbers = [2,4,6];
		win.player = tictactoe[2];
		return win;
	}	
	if(tictactoe[0] == tictactoe[4] && tictactoe[0] == tictactoe[8] && tictactoe[0] != undefined){
	//	 x| |
	//	-------
	//	  |x|
	//	-------
	//	  | |x
		win = new Winner();
		win.numbers = [0,4,8];
		win.player = tictactoe[0];
		return win;
	}	
	return false;
}