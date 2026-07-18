//advanced array methods
// 1. forEach 
// 2. map
// 3. filter
// 4. reduce 
 
const studentList = ["ram", "hari" , "shyam" ,"gopal" ,"manish"]
studentList.forEach((value) => {
    console.log("value:", value)
});
    
const newStudentList = studentList.map((value)=>{
    return value + " wrc"
})
console.log(newStudentList)
