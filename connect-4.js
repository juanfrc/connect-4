var column1 = ["1","8","15","22","29", "36"];
var column2 = ["2","9","16","23","30", "37"];
var column3 = ["3","10","17","24","31", "38"];
var column4 = ["4","11","18","25","32", "39"];
var column5 = ["5","12","19","26","33", "40"];
var column6 = ["6","13","20","27","34", "41"];
var column7 = ["7","14","21","28","35", "42"];
var columns = [column1, column2, column3, column4, column5, column6, column7];

var row1 = ["1","2", "3", "4", "5", "6", "7"];
var row2 = ["8","9", "10", "11", "12", "13", "14"];
var row3 = ["15","16", "17", "18", "19", "20", "21"];
var row4 = ["22","23", "24", "25", "26", "27", "28"];
var row5 = ["29","30", "31", "32", "33", "34", "35"];
var row6 = ["36","37", "38", "39", "40", "41", "42"];
var rows = [row1, row2, row3, row4, row5, row6];

var diagonal1 = ["4", "12", "20", "28"];
var diagonal2 = ["3", "11", "19", "27", "35"];
var diagonal3 = ["2", "10", "18", "26", "34", "42"];
var diagonal4 = ["1", "9", "17", "25", "33", "41"];
var diagonal5 = ["8", "16", "24", "32", "40"];
var diagonal6 = ["15", "23", "31", "39"];
var diagonal7 = ["21", "27", "33", "39"]
var diagonal8 = ["14", "20", "26", "32", "38",]
var diagonal9 = ["7", "13", "19", "25", "31", "37"]
var diagonal10 = ["6", "12", "18", "24", "30", "36"]
var diagonal11 = ["5", "11", "17", "23", "29"]
var diagonal12 = ["4", "10", "16", "22"]
var diagonals = [diagonal12, diagonal11, diagonal10, diagonal9, diagonal8, diagonal7, diagonal6, diagonal5, diagonal4, diagonal3, diagonal2, diagonal1];


$(document).ready(function() {
	var juego = 0
	$('#start').on("click", function() {
		juego ++;
		// circleSwitcher("","circle-red");
		circleSwitcher("circle-red","circle-black");
		console.log("Estoy acá");
		if(juego == 1) {
			game();
		}
		removeClass();
	})

	var removeClass = function(){
		$(".board td").removeClass("circle-red");
		$(".board td").removeClass("circle-black");
		$('.board').removeClass('winner')
	}

	var game = function() {
		won = 0;
		$(".col-1").on("click", function(){ 
			if(won == 0) {
				game_red(column1);
				winner('circle-red');
				}
			if(won == 0){
				game_black();
				winner('circle-black');
			} 
		});
		$(".col-2").on("click", function(){ 
			if(won == 0) {
				game_red(column2);
				winner('circle-red');
				}
			if(won == 0){
				game_black();
				winner('circle-black');
			} 
		});
		$(".col-3").on("click", function(){ 
			if(won == 0) {
				game_red(column3);
				winner('circle-red');
				}
			if(won == 0){
				game_black();
				winner('circle-black');
			} 
		});
		$(".col-4").on("click", function(){ 
			if(won == 0) {
				game_red(column4);
				winner('circle-red');
				}
			if(won == 0){
				game_black();
				winner('circle-black');
			} 
		});
		$(".col-5").on("click", function(){ 
			if(won == 0) {
				game_red(column5);
				winner('circle-red');
				}
			if(won == 0){
				game_black();
				winner('circle-black');
			} 
		});
		$(".col-6").on("click", function(){ 
			if(won == 0) {
				game_red(column6);
				winner('circle-red');
				}
			if(won == 0){
				game_black();
				winner('circle-black');
			} 
		});
		$(".col-7").on("click", function(){ 
			if(won == 0) {
				game_red(column7);
				winner('circle-red');
				}
			if(won == 0){
				game_black();
				winner('circle-black');
			} 
		});
	}

	var game_red = function(column){
		console.log(column);
		for(i=0; i < column.length; i++) {
			if(($("#" + column[i]).hasClass("circle-red") || $("#" + column[i]).hasClass("circle-black")) == false){
				$("#" + column[i]).addClass("animated bounceInDown circle-red");
				$(".circle-turn").toggle("slide", {direction: "left"}, 200).promise().done(function() {
					$('.circle-turn').removeClass("circle-red").addClass("circle-black");
					$('.circle-turn').toggle("slide", 200)
				});

				break;
			}
			// circleSwitcher("circle-black","circle-red");
		}
	}		

	var game_black = function() {	
		var columnBlack = columns[Math.floor((Math.random() * 7))];
		for(i=0; i < columnBlack.length; i++) {
			if(($("#" + columnBlack[i]).hasClass("circle-red") || $("#" + columnBlack[i]).hasClass("circle-black")) == false){
				$("#" + columnBlack[i]).delay(500).queue(function(next) {
					$(this).addClass("circle-black animated bounceInDown");
					$(".circle-turn").toggle("slide", 200).promise().done(function(){
						$('.circle-turn').removeClass("circle-black").addClass("circle-red");
						$('.circle-turn').toggle("slide", 200)
					});
				})							
				break;
			}
			// circleSwitcher("circle-red","circle-black");
		}
	}

	var winner = function(playerClass) {
		columWinner(playerClass);
		rowWinner(playerClass);
		diagonalWinner(playerClass)
	}

	var columWinner = function(playerClass){
		for( i = 0; i < columns.length; i++){
			counter = 0;
			for(j = 0; j < columns[i].length; j ++){
				if($("#"+columns[i][j]).hasClass(playerClass)){
					counter ++;
					if(counter == 4) {
						if(playerClass == "circle-red"){
							$('.board').addClass('winner')
							alert("Red won")
						} else {
							$('.board').addClass('winner')
							alert("Black won")
						}
						won = 1;
					}
				} else {
						counter = 0;
					} 
			}
		}
	}

	var rowWinner = function(playerClass){
		for( i = 0; i < rows.length; i++){
			counter = 0;
			for(j = 0; j < rows[i].length; j ++){
				if($("#"+rows[i][j]).hasClass(playerClass)){
					counter ++;
					if(counter == 4) {
						if(playerClass == "circle-red"){
							$('.board').addClass('winner')
							alert("Red won");
						} else {
							$('.board').addClass('winner')
							alert("Black won");
						}
						won = 1;
					}
				} else {
					counter = 0;
				}
			}
		}
	}

	var diagonalWinner = function(playerClass){
		for( i = 0; i < diagonals.length; i++){
			counter = 0;
			for(j = 0; j < diagonals[i].length; j ++){
				if($("#"+diagonals[i][j]).hasClass(playerClass)){
					counter ++;
					if(counter == 4) {
						if(playerClass == "circle-red"){
							$('.board').addClass('winner')
							alert("Red won");
						} else {
							$('.board').addClass('winner')
							alert("Black won");
						}
						won = 1;
					}
				} else {
					counter = 0;
				}
			}
		}
	}

	var circleSwitcher = function(addClass, removeClass) {
		console.log("I'm switching circles");
		$('.circle-turn').removeClass(removeClass);
		$('.circle-turn').addClass(addClass);
	}

});


//   $(function() {
//     var $dropDiv = $('#dropDiv');
//     var mythis = $('#holder a');
//     // get position of the element we clicked on
//     var offset = mythis.offset();
    
//     // get width/height of click element
//     var h = mythis.outerHeight();
//     var w = mythis.outerWidth();
    
//     // get width/height of drop element
//     var dh = $dropDiv.outerHeight();
//     var dw = $dropDiv.outerWidth();
    
//     // determine middle position
//     var initLeft = offset.left + ((w/2) - (dw/2));

//     // animate drop
//     $dropDiv.css({
//             left: initLeft,
//             top: $(window).scrollTop() - dh,
//             opacity: 0,
//             display: 'block'
//         }).animate({
//             left: initLeft,
//             top: offset.top - dh,
//             opacity: 1
//         }, 300, 'easeOutBounce');
// });