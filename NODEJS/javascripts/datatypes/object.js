// Non-primitive Datatype:- Object

const student={
    fullName:"Utkarsh Singh",
    age:20,
    cgpa:8.7,
    isPass:true
}; 
//console.log(student["age"]);// how to acces keys..

student["age"]=student["age"]+1;// update the value ofobject's keys.. 
console.log(student.age);