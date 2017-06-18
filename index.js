var count = 1000;

function calling() {
	console.log(count/1000);
	if(count !== 3000){
    count += 1000;
	setTimeout(function() { calling(); }, count);
    }
}

setTimeout(function() { calling(); }, count);
