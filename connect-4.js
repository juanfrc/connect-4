var column1 = ["1","8","15","22","29", "36"];
var column2 = ["2","9","16","23","30", "37"];
var column3 = ["3","10","17","24","31", "38"];
var column4 = ["4","11","18","25","32", "39"];
var column5 = ["5","12","19","26","33", "40"];
var column6 = ["6","13","20","27","34", "41"];
var column7 = ["7","14","21","28","35", "42"];
var columns = [column1, column2, column3, column4, column5, column6, column7];


$(document).ready(function() {
	$(".col-1").on("click", function(){ 
		game(column1);
		game_black()
	});
	$(".col-2").on("click", function(){ 
		game(column2);
		game_black();
	});
	$(".col-3").on("click", function(){ 
		game(column3);
		game_black();
	});
	$(".col-4").on("click", function(){ 
		game(column4);
		game_black();
	});
	$(".col-5").on("click", function(){ 
		game(column5);
		game_black();
	});
	$(".col-6").on("click", function(){ 
		game(column6);
		game_black();
	});
	$(".col-7").on("click", function(){ 
		game(column7);
		game_black();
	});

	var game = function(column){
		console.log(column);
		for(i=0; i < column.length; i++) {
			if(($("#" + column[i]).hasClass("circle-red") || $("#" + column[i]).hasClass("circle-black")) == false){
				$("#" + column[i]).addClass("circle-red");
				break;
			}
		}
	}		
	
	var game_black = function() {	
		var columnBlack = columns[Math.floor((Math.random() * 7))];
		for(i=0; i < columnBlack.length; i++) {
			if(($("#" + columnBlack[i]).hasClass("circle-red") || $("#" + columnBlack[i]).hasClass("circle-black")) == false){
				$("#" + columnBlack[i]).addClass("circle-black");							
				break;
			}
		}
	}

});