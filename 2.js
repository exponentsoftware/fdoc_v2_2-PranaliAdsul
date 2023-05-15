// 2. Create an array of objects called `students`. Each object should have keys called `name`, `age`, `grades`, and `hobbies`. Then, create the following functions:

//    a. `findTopStudents` - Returns an array of students who have an average grade above a specified threshold.
   
//    b. `addHobby` - Adds a hobby to a student with a given name, only if the student exists.
   
//    c. `updateStudent` - Updates a student's information only if the student exists. This function should be able to update the student's name, age, grades, and hobbies.

// ```js
// const students = [
//   // ... (Your array of students with their information)
// ];

// // Example usage:

// findTopStudents(students, 85);
// // Output: Returns an array of students with an average grade greater than 85

// addHobby(students, 'Alice', 'painting');
// // Output: Adds 'painting' to the hobbies array of the student with name 'Alice'

// updateStudent(students, 'Alice', { age: 20, grades: [90, 80, 95], hobbies: ['reading', 'painting'] });
// // Output: Updates the student with name 'Alice' to have age 20, new grades, and updated hobbies array
// ```
let students = [
    {name : 'Alice' , age :20 , grades :[80] , hobbies : ['cricket','swimming']},
    {name : 'Sanvi' , age :21 , grades : [88] , hobbies : ['travelling']},
    {name : 'Rohan' , age :20, grades : [72] , hobbies : ['singing']},
    {name : 'Jui' , age :21 , grades : [85], hobbies : ['dancing']},
    {name : 'Kavi' , age :24 , grades : [60], hobbies : ['reading']},
    {name : 'Mohan' , age :19 , grades : [96], hobbies : ['coding']},
    ]
    