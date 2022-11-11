export const func = (list) => {
let newList=0
  for (let i=0; i<list.length;i++){
    for(let k=i; k<list.length; k++){
      if (list[k] < list[i]) {
        newList = list[k];
        list[k] = list[i];
        list[i] = newList;
      }
    }
  
  }
  list.splice(2)
  return list
}
