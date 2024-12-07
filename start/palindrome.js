let str ="ma1dam";
let  newstr =[];
/*let newstr =str.split("").reverse().join("");
//if(str==newstr)
//console.log("yes");
//else console.log("no");*/

for(let i=str.length-1; i>=0;i--)
{
    // console.log(str[i]);
    newstr.push(str[i]);
}
console.log(newstr.join(""));