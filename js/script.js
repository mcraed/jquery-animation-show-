//jquery cheat sheet (4/14/16)
//$(document).ready at the top will run the code inside the function only when the html is completely loaded.
//vvvvvv
$(document).ready(function(){

	$(document).on('click' , function(){

		//.animate will do what it sounds like via css properties inside the method
		//the value outside of the css dictiates the speed of the animation
		// (10000 === 1 second)
		$('#block').animate({'marginTop':200 , 'marginLeft':200} , 4000)

		$('.header').animate({'marginLeft':500}, 3000);

		//.css will do the same instantly - theres no animation to it
		$('#demo').css({color: 'green'}); 

		$('.header').animate({'marginTop':0});

		$('#para').animate({marginTop:10});

		//heres how to pick random values from an array
		var colors = ['red' , 'blue', 'purple' , 'black' , 'green' , 'gold' , 'orange'];
/*(Math.random() * 6) will pick a random number between 0 and 1 , then multiply it by 6
 (because there are 7 items in the array) Math.floor will round it down*/
		var set = function(a){	
		 	setInterval(function(){
				var n = Math.floor( (Math.random() *6 ));
				$(a).css({color:colors[n]});
			} , 500);
		};

//all of this inside of setInterval will repeat this process every half of a second (1000 === 1 second)

		set('#freak');
		set('#sent');
		set('#para');
		set('h1');
		set('h2');
		set('h3');
		set('h4');
		set('h6');
	});

});

