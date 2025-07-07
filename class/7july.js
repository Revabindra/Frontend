//object - multiple data types can be used 
let user=[{
    name:"John",
    age:20
},
{
    name:"ravneet",
    age:20
},
{
    name:"rohan",
    age:25

},
{
    name:"deepak",
    age:24
},
]
let result = user
    .filter(person => person.age > 20)   // Step 1: Filter out users whose age is > 20
    .map(person => person.name);         // Step 2: Map to get only the names

console.log(result);

//promises - are object which is having status, response  and it is asynchronous 
//status -pending, fulfilled and rejected
// promise - .then(fulfilled) and .catch(rejected)
// const promise = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("Promise is resolved");
//     },3000);
// });
// const data=promise
// .then((res)=>{
//     console.log(res);
// })
// .then(
//     console.log("punal get icr")
// )
// .then(
//     console.log("punal working")
// )
// .then(
//     console.log("punal layoff")
// )
// .catch((err)=>{
//     console.log(err);
// });
// console.log(data);

const promise1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        reject("promise 1");
   },3000);
});
const promise2 = new Promise((resolve, reject) =>{
   setTimeout(() =>{
        reject("promise 2");
    },5000);
});
const promise3 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        reject("promise 3");
   },6000);
});
const promise4 = new Promise((resolve, reject) =>{
   setTimeout(() =>{
        reject("promise 4");
    },7000);
});
Promise.all([promise1,promise2,promise3,promise4])
 .then((results) => {
        console.log("Promise.all:", results);
    })
    .catch((err) => {
        console.log("Promise.all Error:", err);
    });
Promise.allSettled([promise1,promise2,promise3,promise4])
 .then((results) => {
        console.log("Promise.allsettled:", results);
    })
    .catch((err) => {
        console.log("Promise.allsettled Error:", err);
    });
Promise.any([promise1,promise2,promise3,promise4])
 .then((results) => {
        console.log("Promise.any:", results);
    })
    .catch((err) => {
        console.log("Promise.any Error:", err);
    });
Promise.race([promise1,promise2,promise3,promise4])
 .then((results) => {
        console.log("Promise.race:", results);
    })
    .catch((err) => {
        console.log("Promise.race Error:", err);
    });

    

//promise api's
//promise.any, promise.all, promise.race , promise.settled


