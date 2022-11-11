export const func = (list) => {
let counter = 0
for (let i=0; i<list.length;i++){
    if(list[i]%2===0){
   counter++
    }

} 
  return counter
};
console.log(func([0,3,7,3,2,4]))
