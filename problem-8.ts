{

interface Student {
    name: string;
    age: number;
    address: string;
  }
  
  function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    for(let i=0; i<keys.length; i++){
      if(obj[keys[i]]){
        return true;
      }
    }
    return false;
  }
  
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  
//   console.log(validateKeys(person, ['name', 'age'])); 
}