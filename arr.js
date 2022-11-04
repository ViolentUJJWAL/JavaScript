let mark=[92,93,66,54,33,92,82,72,82,222,47]
console.log(typeof mark)
for (a of mark){
	console.log(a)
}
console.log("length is ", mark.length)
mark[5]=50
mark[10]=89
console.log(mark)

for (let i=0; i<mark.length; i++){
	console.log(mark[i])
}
console.log(mark.toString())
console.log(mark.join("and"))
console.log(mark.pop()) // last element
console.log(mark.push(89))
console.log(mark.shift())
console.log(mark.unshift(89))
console.log(mark)
delete mark[4]
console.log(mark)
mark[4]=39
let mark1 = [45,63,42,99]
console.log(mark)
console.log(mark1)
console.log(mark.concat(mark1))
console.log(mark.sort())
console.log(mark.slice(3,5))
console.log(mark.slice(5))
console.log(mark.splice(2,1,0,15,25))
console.log(mark)
console.log(mark.reverse())
let name=["ujjwal",'aman',58,63,45,'suyash','rahul',"naved","harshit",'sahil']
console.log(name.sort())
console.log(name)


let num=[1,2,3,4,5,6,11,22,33,44,55,66,111,222,333,444,555,666,1111,2222,3333]
console.log(num)

let comp = (a,b) => {
	return b-a
}
console.log(num.sort(comp))
console.log(num)
console.log(num.reverse())
console.log(num)