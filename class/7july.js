// 7 july object,promises, api  

//object - multiple data types can be used 
// let user=[{
//     name:"John",
//     age:20
// },
// {
//     name:"ravneet",
//     age:20
// },
// {
//     name:"rohan",
//     age:25

// },
// {
//     name:"deepak",
//     age:24
// },
// ]
// let result = user
//     .filter(person => person.age > 20)   // Step 1: Filter out users whose age is > 20
//     .map(person => person.name);         // Step 2: Map to get only the names

// console.log(result);

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

// const promise1 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         reject("promise 1");
//    },3000);
// });
// const promise2 = new Promise((resolve, reject) =>{
//    setTimeout(() =>{
//         reject("promise 2");
//     },5000);
// });
// const promise3 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         reject("promise 3");
//    },6000);
// });
// const promise4 = new Promise((resolve, reject) =>{
//    setTimeout(() =>{
//         reject("promise 4");
//     },7000);
// });
// Promise.all([promise1,promise2,promise3,promise4])
//  .then((results) => {
//         console.log("Promise.all:", results);
//     })
//     .catch((err) => {
//         console.log("Promise.all Error:", err);
//     });
// Promise.allSettled([promise1,promise2,promise3,promise4])
//  .then((results) => {
//         console.log("Promise.allsettled:", results);
//     })
//     .catch((err) => {
//         console.log("Promise.allsettled Error:", err);
//     });
// Promise.any([promise1,promise2,promise3,promise4])
//  .then((results) => {
//         console.log("Promise.any:", results);
//     })
//     .catch((err) => {
//         console.log("Promise.any Error:", err);
//     });
// Promise.race([promise1,promise2,promise3,promise4])
//  .then((results) => {
//         console.log("Promise.race:", results);
//     })
//     .catch((err) => {
//         console.log("Promise.race Error:", err);
//     });

    

//promise api's
//promise.any, promise.all, promise.race , promise.settled

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise1");
//     },5000)
// });
// promise1.then((res)=> console.log(res))
// .then(()=>{
//     setTimeout(()=>{
//         console.log("2");
//     },3000)
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log("3");
//     },2000)
// })
// .catch((err)=>{
//     console.log("error");
// })
// we can make functions so that .then and .then just go on 
// function something(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("promise");
//         },4000)
//     })
// }

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise1");
//     },5000)
// });
// promise1.then(()=>{
//     something("promise 2",5000);
// })
// .then(()=>{
//     something("promise 3",5000);
// })
// .then(()=>{
//     something("promise 4",3000);
// })
// .then(()=>{
//     something("promise 5",2000);
// })
// .catch((err)=>{ console.log("error",err)})



// const promise1 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("promise 1");
//    },3000);
// });
// const promise2 = new Promise((resolve, reject) =>{
//    setTimeout(() =>{
//         resolve("promise 2");
//     },5000);
// });
// const promise3 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("promise 3");
//    },6000);
// });
// const promise4 = new Promise((resolve, reject) =>{
//    setTimeout(() =>{
//         resolve("promise 4");
//     },7000);
// });

// Promise.all([promise1,promise2,promise3,promise4])
//  .then((results) => {
//         console.log("Promise.all:", results);
//     })
//     .catch((err) => {
//         console.log("Promise.all Error:", err);
//     });
// Promise.allSettled([promise1,promise2,promise3,promise4])
//  .then((results) => {
//         console.log("Promise.allSettled:", results);
//     })
//     .catch((err) => {
//         console.log("Promise.all Error:", err);
//     });

//     Promise.any([promise1,promise2,promise3,promise4])
//  .then((results) => {
//         console.log("Promise.race:", results);
//     })
//     .catch((err) => {
//         console.log("Promise.race Error:", err);
//     });
// Promise.race([promise1,promise2,promise3,promise4])
//  .then((results) => {
//         console.log("Promise.any:", results);
//     })
//     .catch((err) => {
//         console.log("Promise.any Error:", err);
//     });


// async function apiData(){
//     const data=await fetch('https://dummyjson.com/users');
//     const myData=await data.json();
//     console.log(myData);
//     console.log(data);
// }
// apiData()

// call()

function assign(){
    console.log(`student name:${this.studentName} from batch :${this.batchNo}`)
}

const student1={
    studentName:"ravneet",
    batchNo:23
}
assign.call(student1);
assign.apply(student1);
const data1=assign.bind(student1);
console.log(data1);