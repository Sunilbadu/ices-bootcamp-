//ternary operators
 console.log(1>2 ? 'calme' : 'call nagara');

 console.log(1 == "1")//true
 console.log(1 === "1")//false


 function summation(num1 , num2 ){  

    return num1 + num2
 }

 summation(1,2);

 const sub = (a ,b) =>{
return a-b;
 }
 const ans =sub(3,2);
 console.log(ans)

 const genarateotp = ()=>{
return Math.floor(Math.random()*1000);
 }
 const ot = genarateotp();
 console.log(`your otp is ${ot}`)