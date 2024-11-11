
function removeDuplicates(arr:number[]):number[]{
    return arr.filter((item,index)=>arr.indexOf(item) === index)
  }
  const numArray = removeDuplicates([1,1,2,5,2,4])
  