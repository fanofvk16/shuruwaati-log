// let hero=["superman","shaktiman","hulk","antman",1,4,46889]
// console.log(hero[2]);
// hero.push("captain america")
// console.log(hero[7]);
// hero.pop()
// console.log(hero);

// const flowers=["tulip","rose", "lotus","daisy","lily"];
// console.log(flowers.splice(1,3));
// flowers.unshift("panda")
// //console.log(flowers.splice(0,6)); //splice= deletes the elements
// // previously splice call kiya tha so indexed 1-3 wale delete ho gaye hai

// console.log(flowers.indexOf("tulip")); 

//array pt2
let dora=["nobita","shizuka","suneo","gian"]
let pokemon=["ash","brock","jenny"]
pokemon.pop()
pokemon.push(dora)
console.log(pokemon);
pokemon.pop()
console.log(dora.push(pokemon));  

dora.pop() 

let cartton=dora.concat(pokemon)
console.log(cartton);

let cartoon=[...dora,...pokemon]  //...(3 dots)compulsory used to concatenate 2 or more than 2 arrays==>spread
let name=["unnati"]
console.log(Array.from.name);
console.log(Array.of(name,pokemon,dora));

console.log(Array.from({age:"vrushali"}));   //doesn't understands ki vo kisko chaparcter mai convert karna hai
//interesting asked in interview



//learning= push pop,shift,unshift, concat,spread,splice,