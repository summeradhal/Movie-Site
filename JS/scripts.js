

$(document).ready(function(){

// canvas=document.getElementById('movieScreen');
// context=canvas.getContext('2d');




var apiKey = '?api_key=fec8b5ab27b292a68294261bb21b04a5';


//after the / comes the width Eg imageBaseUrl+'w300'+poster_path
var imageBaseUrl='http://image.tmdb.org/t/p/';

//on search
$(.searchBar).submit(function(){
	//prevents event from happening 
	event.preventDefault();
var searchVal=$('.searchBar').val();
//Api Base URL
var apiBaseUrl='http://api.themoviedb.org/3/';

npUrl= apiBaseUrl+'find'+apiKey+'='+searchVal;

var titleURL = baseURL + 'search/' + searchVal + apiKey + '&query=' + encodeURI(searchTitle) + '&page=1';
//START JSON
$.getJSON(npUrl, function(nowPlayingData){
	$(titleData.results).each(function(){


console.log(nowPlayingData);
	var npHTML='';
	for(var i= 0;i<nowPlayingData.results.length;i++){
		npHTML+='<div class="col">';	
			var posterUrl=imageBaseUrl+'w300'+nowPlayingData.results[i].poster_path;
			npHTML+='<img src="'+posterUrl+'">';
			npHTML+=nowPlayingData.results[i].title;
			npHTML+='</div>';
		
	}


	$('.poster-grid').html(npHTML);

});



});



// function animate(){
	

// 	context.beginPath();
// 	context.rect(200,43,1500,550);
// 	context.stroke();
// 	context.fillStyle="#ffffff";
// 	context.fill();


// 	//28 px font
// 			context.fillStyle="#000"
// 			context.font="28px Arial";
// 			context.fillText("High: "+tempMax,820,370);
			

// 			//20 px font
// 			context.font="20px Arial";
// 			// context.fillText(src1,970,100);
// 			context.fillText(weatherDescription,970,300);
// 			context.stroke();

// }












