
//objects


const student  ={
    name : "sunil",  //attrubutes
    age : 20,
    address :"kathmandu",
    gender: "male",
    // greet: function(){
    //     console.log(`Hello ${this.name}`) //used this
    // } //method
    greet : ()=>{
        console.log(`Hello ${student.name}`) //if we used this then the o/p will be undefined
    }
}
student.greet()

//arrow fun do not support this only locates the global variable