var time;
const t = '──────────\n';

function isInputPrime(input ,last) {
	if(last === input)
		return '<span class="org">'+input+'</span>는 소수입니다!\n';
	else
		return '<span class="org">'+input+'</span>는 소수가 아닙니다.\n';
}

function play(num) {
  var timea =  new Date();
	var prim = new Array();
  var list = new Array();
  for (var i = 2; i < num+1; i++) {
    list.push(i);
  }
	while(list.length > 0){
		prim.push(list[0]);
		var thisPrime = list[0];
		list.forEach(function (d,i,l) {
			if (d % thisPrime === 0) {
				list.splice(i,1);
			}
		});
	}
	time = (new Date() - timea) / 1000;
  console.log("time: "+ (new Date() - timea) + "ms");
  return prim;
}
document.querySelector('#button').addEventListener('click',function (){
	var input = Number(document.querySelector('#i').value);
	var result = play(input);
	document.querySelector('#result').innerHTML = t+'TIME: '+time+'s\nTOTAL: '+result.length+'\n'+t+isInputPrime(input, result[result.length - 1])+t+'RESULT:\n'+result.join(', ');
});