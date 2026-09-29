function Dates(){
const d =new Date();
console.log(`${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`);
}
Dates();
function Timer(){
    const d=new Date();
    console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()}`);
}
const timeDate=setInterval(Timer,1000);
console.log(timeDate);