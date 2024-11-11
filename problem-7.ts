class Car{
    constructor(public make:string,public model:string,public year:number){}
    getCarAge():number{
        return new Date().getFullYear() - this.year;
    }
}
const car1 = new Car('Honda','Civic',2018);
// console.log(car1.getCarAge());