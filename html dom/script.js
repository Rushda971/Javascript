//document.getElementsByTagName(name)	Find elements by tag name
//iska kaam hai same tag waale elements find karna hai aur phir us per op perform karta hai index ke saath 
//elmt ko specific elmt ke chnage karna ho tab buyId fastest hota hai becoze of unique id


// Easy Level
// Q1. 3 <p> tags banao. Button par click karne par sirf pehle paragraph ka color red karo.
        function changeColor(){
                document.querySelector("p").style.color="red";
        }
// Q2. 4 <h2> tags banao. JavaScript se dusre <h2> ka text "Welcome" kar do.
// Q3. 5 <li> items banao. Console me total <li> tags ki count print karo.
    const liCount=document.getElementsByTagName("li").length;
    console.log(liCount);
// Q4. 3 <div> tags banao. Button click par teesre <div> ka background yellow karo.
    function changeColors() {
        const divTags = document.getElementsByTagName("div");
        divTags[2].style.backgroundColor = "yellow";
    }
// Q5. 2 <h1> tags banao. JavaScript se pehle <h1> ka font size 40px kar do.
    function changeFont(){
        document.querySelector("h1").style.fontSize="100px";
    }
//agar tag name ke saath karna tab index postion bhi dena hogya
    function changeFont(){
        document.getElementsByTagName("h1")[0].style.fontSize="100px";
    }
// Medium Level
// Q6. 5 <p> tags banao. Button click par sabhi paragraphs ka color blue kar do. (Hint: for loop use karo.)
// Q7. 4 <li> items banao. JavaScript se har item ke aage numbering add karo.

// Example:

// 1. Apple
// 2. Mango
// 3. Banana
// 4. Orange

//textContent-jab kisi elemnt ko badalna hai ya read karna hai 
//innerHtml - tab use hota hai jab tag add karn ho

const items=document.querySelectorAll("li");
function addNum(){
    for(let i=0;i<items.length;i++){
        items[i].textContent=(i+1)+"."+items[i].textContent;
    }
}

// Q8. 3 <h3> tags banao. Button click par sabhi headings ka text "JavaScript DOM" kar do.
// Q9. 5 <span> tags banao. JavaScript se sabhi spans ka background lightgreen kar do.
// Q10. 6 <p> tags banao. Sirf even index (0, 2, 4) wale paragraphs ka color red aur odd index (1, 3, 5) wale paragraphs ka color blue kar do.
//multiple paragraph hai isliye loop chale gye

const para=document.querySelectorAll("p");
function EvenPara(){
        for(let i=0;i<para.length;i++){
            if(i%2===0){
                para[i].style.color="red";
            }
        else{
            para[i].style.color="blue";
        }
    }
}

// Challenge Questions

// Q11. 5 <img> tags banao. JavaScript se sabhi images ki width 200px kar do.
const imagesAction=document.querySelectorAll("img");
function imageResizing(){
   for(let i=0;i<imagesAction.length;i++){
    imagesAction[i].style.width="200px";
    imagesAction[i].style.height="200px";
    }
}
function resetImage() {
    for (let i = 0; i < imagesAction.length; i++) {
        imagesAction[i].style.width = "";
        imagesAction[i].style.height = "";
    }
}

// Accessing Element Attributes
// Property	Description
// element.attribute	Change the attribute value of an HTML element
// element.style.property	The style of an HTML elementmuhje ye samjhao 


//element attribute - HTML element ke kisi attribute ki value ko access ya change karna.

// 1 . Img ka sec chnage karna 
function changeImage(){
    const img = document.getElementById("pic");
    img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmB1XYE_UGGnh3KuopvX0darDLNoIBQ0zHL8DIR2jm0w&s=10";
}

    //window.location.href = "https://github.com/Rushda971"; --same tab per khole gya
    //window.open("https://github.com/Rushda971", "_blank"); --new tab per khole gya 

function linkAttribute() {
    const link = document.getElementById("link");
    link.href = "https://github.com/Rushda971";
}
//Input value


