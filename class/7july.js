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
const promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Promise is resolved");
    },3000);
});
const data=promise
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
console.log(data);

