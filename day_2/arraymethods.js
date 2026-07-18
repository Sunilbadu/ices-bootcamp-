//advanced array methods
// 1. forEach 
// 2. map
// 3. filter
// 4. reduce 
 

//for each method
const studentList = ["ram", "hari" , "shyam" ,"gopal" ,"manish"]
studentList.forEach((value) => {
    console.log("value:", value)
});
    

//map
const newStudentList = studentList.map((value , index)=>{
    return value + " wrc" + " index:" + index
})
console.log(newStudentList)


//filter nethod
const studentsMarks =[10,20,30,40,50,60,70,80,90]
const newFilter = studentsMarks.filter((value , index )=>{
return value>=40;
})
console.log("passed:" , newFilter);

//reduce method
const newTotal = studentsMarks.reduce((total,value)=>{
    return total + value
})
console.log("new total=", newTotal)