console.log(`hello world`);
const inc = document.getElementById("inc")
const count = document.getElementById("count")

inc.onclick=()=>{
    let value = 0
    value += 1;
    count.innerHTML = value;
}