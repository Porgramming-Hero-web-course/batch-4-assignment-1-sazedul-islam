interface Profile{
    name:string;
    age:number;
    email:string;
}
function updateProfile(profile:Profile, update:Partial<Profile>):Profile{
    return {
     ...profile,
     ...update
    }
}
const profile = { name: "Alice", age: 30, email: "alice@..." };
const updatedProfile = updateProfile(profile, { age: 40 });
