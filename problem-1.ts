function sumArray(num: number[]) : number{
   
    let sum = 0;
    for(let i=0; i< num.length; i++ ){
        sum += num[i];
    }
    return sum;
    
}
const arrayEle =[2,3,5,6,8];
console.log(sumArray(arrayEle));