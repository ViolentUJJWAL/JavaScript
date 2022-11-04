// for loop
for (let a=0; a<5; a++){
	console.log(a)
}
console.log()
for (let a=4; a>-1; a--){
	console.log(a)
}


// for in loop
let obj={
	first: 1,
	second: 2,
	third: 3,
	forth: 4,
	fifth: 5,
}
for (let a in obj){
	console.log(obj[a] +" is "+ a)
}


// for of loop
let b = `i am a boy' write in ` ;
for (let a of b){
	console.log(a)
}


// while loop
let i=0;
while(i<5){
	console.log(`${i}hello\rhello2`)
	i++;
}


// do while loop
let j=0
do{
	console.log(j)
	j++
}while(j<5)