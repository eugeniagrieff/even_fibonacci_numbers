var i;
var fib = [];

fib[0]=0;
fib[1]=1;
evenTotal=0;

for( i=2; i<1000; i++) {
	fib[i] = fib[i-2]+fib[i-1];
	console.log(fib[i]);
    
	if (fib[1] % 2 === 0) {

	evenTotal += fib[i];
	console.log(evenTotal);
	}
}