// //SINGLETON

// //OBJECT  LITERALS

// const mySymb=Symbol("unique quality")

// let details={
//     "fullname":"unnati thorat",
//     name:"unnati",
//     age:18,
//     [mySymb]:"unique qualities",
//     school: "aps",
//     college:"IIT",
//     aspiration:"forreign jaana"

// }
// console.log(details.college);

// console.log(details["age"]);

// console.log(details["fullname"]);
// //2 ways of printing data into output

// console.log(typeof details.age);

// console.log(details[mySymb]);

// console.log(typeof details[mySymb]);

// console.log(typeof details["mySymb"]);

// console.log(typeof mySymb);
// //26-33 line no. are interview wale ques

// //Object.freeze(details)
// //details.name=  Vrushali
// details.greeting=function(){
//     console.log(`Hello,${this.name}`);
// }
// console.log(details.greeting);


//Constructor

const blank=new Object()  //singleton
const blank1={}  //non-singleton
blank1.id={
    unnati:"b24mt1043",
    manisha:"b24ch1045",
    shreya:"b24cm1056",
    princy:"b24cm1056"
}
blank1.topic="friends"
console.log(blank1);
const family={
    bacha:"unnati",
    mamma:"Vrushali",
    Pitte:"Ranjit"    
}
console.log(family);
const all={family, blank1}
console.log(all);

//spread concept
const obj={1:"a", 2:"b", 3:"c"}
const together={...obj, ...blank1,...family}
console.log(together);

//array k andar object
const users=[
    {rollNo:"b24cm1049",
        quality:"joylly"
    },{
        rollNo:"b24cm1056",
        quality:"rottdi"
    },{
    rollNo:"b24ch1045",
        quality:"self-obsessed"
    }
]

console.log(users[1].quality);


console.log(Object.keys(family)); //family k starting wale(terms before:)
console.log(Object.values(blank1));  //(terms after:)