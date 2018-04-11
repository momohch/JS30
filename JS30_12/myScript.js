const stringArray=[];
const secretCode = 'unicorn'

window.addEventListener('keyup', (e)=>{
	console.log(stringArray);
	stringArray.push(e.key);
	stringArray.splice(-secretCode.length - 1, stringArray.length - secretCode.length)
	if(stringArray.join('').includes(secretCode)){
		cornify_add();
	}
})