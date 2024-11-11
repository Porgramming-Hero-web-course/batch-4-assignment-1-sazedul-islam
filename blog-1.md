[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=17057160&assignment_repo_type=AssignmentRepo)
 --> Union Types (|)
 *Union types make it easy to work with variables
 *Useful in functions where you accept multiple types for a parameter
 *TypeScript enforces that only values matching one of the specified types can be assigned to the variable.
 *type StringOrNumber = string | number;

 ---> Intersection Types (&)
 *Intersection types are useful for composing types that must include multiple sets of properties or behaviors.
 *Merging interfaces ( Person & Employee).
 *type PersonEmployee = Person & Employee;
