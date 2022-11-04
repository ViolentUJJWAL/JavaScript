let num=[1,2,3,4,5,6,7,8,9]

// forEach
num.forEach((i)=>{
	console.log(i*i)
})


// map
let newarr= num.map((i)=>{
	console.log(i**2)
	return i**2
})
console.log(">",newarr)

// filter
let filnum=[1,2,3,4,5,6,7,8]
let newfilnum= filnum.filter((i)=>{
	return i%2==0
})
console.log("filter ", newfilnum)

// reduce

let newre= filnum.reduce((i,i1)=>{
	return i + i1
})
console.log("reduce ",newre)

// with function
const less=(x,y)=>{
	return y-x
}
console.log(filnum.reduce(less))

// array from
let name="ujjwal"
let arr=Array.from(name)
console.log(arr)
                // not work
/*
const info={
	name: "ujjwal",
	class: "bca",
	age: 20,
	live: "kanpur",
	phone: 8565012127
}
console.log(info)

let narr= Array.from(info)
console.log(narr)
*/

// for....of
for (i of num){
	console.log(i)
}   //print value

// for....in
for (i in num){
	console.log(i) // print index no.
}

