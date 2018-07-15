var myArray;
var answer = 0;

duplicateCount("aAaezbrcAderb"); //should be 

function duplicateCount(text){

	text = text.toUpperCase();
	myArray = text.split('');
	myArray.sort();
//	myArray.sort((a, b) => a.localeCompare(b, {ignorePunctuation: true}));
//	console.log(myArray);
	
	for(var i = 0; i < myArray.length; i++){

		if(myArray[i] != myArray[i+1]){
		}
		else if(myArray[i] == myArray[i - 1]){
		}
		else{
			answer++;
		}
		console.log(answer);
	}
	return answer;
}