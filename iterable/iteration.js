//set
//remove duplicate automatically

//creating new set-=empty set created
const fruit=new Set();

//inserting value
fruit.add("banana");
fruit.add("apple");
fruit.add("mango");
console.log(fruit);

//Array se Set banana-array se duplaicte
const nums=[1,2,3,4,5,7,5,4,3,2];
const sets=new Set(nums);
console.log(sets);

//Wapas array chahiye toh spread operator use karo:
const uniqueArray=[...nums];
console.log(uniqueArray);

//size check karna 
console.log(fruit.size);
console.log(sets.size);

//agar value check karna hai-.has
console.log(fruit.has("apple"));
console.log(fruit.has("cherry"));

//value delete kar hai delete 
fruit.delete("mango");
console.log("delete:mango",fruit);

//entries-entries() ka use zyada tar API consistency ke liye hai (Map se match karne ke liye)
/*Set ko design karte waqt Anthropic... (oops galat, JavaScript designers) ne socha — 
agar dev Map se Set pe switch kare, toh code same tarah se kaam kare. Isliye Set me bhi entries(), keys(), values() methods diye —
 bas Set me key aur value dono same hote hain.*/
fruit.entries
console.log("entries:",fruit);

//loop chalana 
for (let item of fruit){
    console.log("loop:",item);
}
//forEach
fruit.forEach(item=>console.log("forEach:",item));

//object 
const obj1=new Set();
obj1.add({a:1});
const obj2= new Set();
obj2.add({a:1});
console.log(obj1===obj2);

//agar sab kuch clr karna hai clear
//clear
fruit.clear();
console.log(fruit); 

//Example=>Agar same reference do baar add karo, tab duplicate nahi banega:
const s = new Set();
const myObj = {a: 1};  // Ek hi object, address: 0x001

s.add(myObj);
s.add(myObj);  // Same object dobara add kiya

console.log(s.size); // 1, kyunki reference same hai

//object reference
const s1 = new Set([1, 1, 1]);
console.log(s1.size); // 1, kyunki numbers value se compare hote hain

const s2 = new Set([{}, {}, {}]);
console.log(s2.size); // 3, kyunki har {} ek naya object hai

/*Objects hamesha memory reference se compare hote hain, unke andar ka data same ho tab bhi.
 {a:1} do baar likhna matlab do alag objects banana — chahe unka content identical ho.*/

// Important baatein yaad rakho

// Set insertion order yaad rakhta hai (jis order me daala, usi order me aata hai).
// Set me index nahi hota — set[0] jaisa kuch nahi chalega, array jaisa treat mat karo.
// Objects compare reference se hote hain, value se nahi:

const lettter=new Set(["a","b","c","d"]);
console.log(lettter);


