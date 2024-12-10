let a=1
const b=2
var c=3
if(true){
    let a=10
    const b=20
    var c=30     //var -- even after declaring locally it works as globally
}
console.log(a);
console.log(b);
console.log(c);