// array 
const myArr=[0,1,2,3,4,5]
const myHeros=["shaktiman","naagraj"] 
// console.log(myArr[0]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()



// myArr.unshift(9)//add 9 at strating of array 
// myArr.shift()//removes the the 1st element from the array


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// const newArr=myArr.join();
// console.log(typeof newArr);
// console.log(myArr);
//slice ,splice

console.log("A" ,myArr);
const myn1 = myArr.slice(1,3)// start from 1 and end before 3 not including 3
console.log(myn1);
console.log("B",myArr);


const myn2= myArr.splice(1,3)//will include everything from 1 to 3 but there will be change in the original array that is if we print it it will show the elements after 3
console.log("C",myArr);

console.log(myn2);