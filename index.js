var scores,activePLayer,roundscore;
init();

//document.querySelector('#current-'+activePLayer).textContent=dice;



document.querySelector('#roll').addEventListener('click',function(){

	var dice=Math.floor(Math.random()*6)+1;
	

	document.querySelector("#dicv").style.display="block";
	document.querySelector('#dicv').textContent=dice;

	if(dice!==1){
		//add score to cuurent
		
		roundscore+=dice;
		document.querySelector('#current-'+activePLayer).textContent=roundscore;
	}
	else{
		//change player.
		newPLayer();
		
	}


});



document.querySelector('#hold').addEventListener('click',function(){
	scores[activePLayer]+=roundscore;
	document.getElementById('global-'+activePLayer).textContent=scores[activePLayer];
		var input=document.querySelector('.final').value;
		var winningscore;
		if(input){
			winningscore=input;
		}
		else{
			winningscore=20;
		}

		if(scores[activePLayer]>=winningscore)
	{
		document.querySelector('#Player-'+activePLayer).textContent='Winner!';
		document.querySelector('#Player-'+activePLayer).style.color='black';
		document.querySelector('.wrapper').classList.remove('back');
		document.querySelector('.wrapper').classList.add('winner-'+activePLayer);
		document.querySelector('#dicv').style.display="none";
		document.getElementById('roll').style.display='none';
		document.getElementById('hold').style.display='none';
	}
	else{
	newPLayer();
	}

});

function newPLayer(){
		roundscore=0;
		activePLayer===0?activePLayer=1:activePLayer=0;
		document.querySelector('#current-0').textContent='0';
		document.querySelector('#current-1').textContent='0';


		document.querySelector('#Player-0').classList.toggle('active');
		document.querySelector('#Player-1').classList.toggle('active');

		document.querySelector("#dicv").style.display="none";
}

document.getElementById('new').addEventListener('click',init);

	function init(){
			scores=[0,0];
			roundscore=0;
			activePLayer=0;

			document.querySelector("#dicv").style.display="none";
			document.getElementById('Player-0').textContent='Player-1';
			document.getElementById('Player-1').textContent='Player-2';
			document.getElementById('global-0').textContent='0';
			document.getElementById('global-1').textContent='0';
			document.getElementById('current-0').textContent='0';
			document.getElementById('current-1').textContent='0';

			document.getElementById('roll').style.display='block';
			document.getElementById('hold').style.display='block';
			document.querySelector('.wrapper').classList.remove('winner-0');
			document.querySelector('.wrapper').classList.remove('winner-1');
			document.querySelector('.wrapper').classList.add('back');
			document.getElementById('Player-0').classList.remove('active');
			document.getElementById('Player-0').classList.add('active');
			document.getElementById('Player-1').classList.remove('active');

};

