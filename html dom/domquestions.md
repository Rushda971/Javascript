




# 4. `remove()`

E

Ek aur example

```html
<ul>

<li>Apple</li>

<li id="banana">Banana</li>

<li>Mango</li>

</ul>
```

```javascript
document.getElementById("banana").remove();
```

Output

```
Apple

Mango
```

---

# 5. `setAttribute()`

Kisi element ka attribute set karta hai.

### Syntax

```javascript
element.setAttribute("attribute","value");
```

### Example

```html
<img id="image">
```

```javascript
let img = document.getElementById("image");

img.setAttribute("src","cat.jpg");
```

Output

```html
<img src="cat.jpg">
```

---

Aur

```javascript
img.setAttribute("width","200");
```

Output

```html
<img src="cat.jpg" width="200">
```

---

Aur

```javascript
img.setAttribute("alt","Cute Cat");
```

Output

```html
<img src="cat.jpg" width="200" alt="Cute Cat">
```

---

# 6. `getAttribute()`

Attribute ki value nikalta hai.

### Example

```html
<img
id="img"

src="cat.jpg"

width="200">
```

```javascript
let img = document.getElementById("img");

console.log(img.getAttribute("src"));
```

Output

```
cat.jpg
```

---

Aur

```javascript
console.log(img.getAttribute("width"));
```

Output

```
200
```

---

# Difference

```javascript
setAttribute()
```

Value set karta hai.

```javascript
getAttribute()
```

Value read karta hai.

---

# 7. `addEventListener()`

Ye kisi event ko listen karta hai.

Jaise

* click
* mouseover
* keypress
* input
* submit

etc.

### Syntax

```javascript
element.addEventListener("event", function(){
    // code
});
```

---

## Example 1 (Button Click)

```html
<button id="btn">
Click Me
</button>

<script>

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){

alert("Button Clicked!");

});

</script>
```

Output

Button click karoge

```
Button Clicked!
```

---

## Example 2

```javascript
btn.addEventListener("click", function(){

console.log("Hello");

});
```

Console

```
Hello
```

---

## Example 3 (Mouse Over)

```html
<h1 id="title">

Hello

</h1>
```

```javascript
let title = document.getElementById("title");

title.addEventListener("mouseover",function(){

title.style.color="red";

});
```

Mouse le jaoge

```
Hello
```

Red ho jayega.

---

## Example 4 (Input)

```html
<input id="name">
```

```javascript
let input = document.getElementById("name");

input.addEventListener("input",function(){

console.log(input.value);

});
```

Agar type kiya

```
A
```

Console

```
A
```

Type kiya

```
Ab
```

Console

```
Ab
```

---

# Complete Example (Sab Ek Saath)

```html
<!DOCTYPE html>
<html>
<body>

<button id="btn">Add Paragraph</button>

<div id="box"></div>

<script>

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    let p = document.createElement("p"); // Create
    p.innerText = "Hello JavaScript";

    p.setAttribute("class", "text");     // Set attribute

    document.getElementById("box").appendChild(p); // Add

    console.log(p.getAttribute("class")); // Get attribute

});


```
/*
### Kya hoga?

1. Button par click hua.
2. `createElement("p")` → naya `<p>` bana.
3. `innerText` → text add hua.
4. `setAttribute("class","text")` → class lag gayi.
5. `appendChild()` → paragraph page par dikh gaya.
6. `getAttribute("class")` → console me `"text"` print hua.

---

## Quick Revision Table

| Method               | Kya karta hai?                          | Example                             |
| -------------------- | --------------------------------------- | ----------------------------------- |
| `createElement()`    | Naya HTML element banata hai            | `document.createElement("div")`     |
| `appendChild()`      | Ek child element add karta hai          | `parent.appendChild(child)`         |
| `append()`           | Text ya multiple elements add karta hai | `div.append("Hi", p)`               |
| `remove()`           | Element delete karta hai                | `element.remove()`                  |
| `setAttribute()`     | Attribute set karta hai                 | `img.setAttribute("src","cat.jpg")` |
| `getAttribute()`     | Attribute ki value leta hai             | `img.getAttribute("src")`           |
| `addEventListener()` | Event handle karta hai                  | `btn.addEventListener("click", fn)` |

**Yaad rakhne ka shortcut:**

* 🏗️ `createElement()` → Naya element banao
* ➕ `appendChild()` / `append()` → Page me add karo
* ❌ `remove()` → Hata do
* ⚙️ `setAttribute()` → Attribute lagao
* 📖 `getAttribute()` → Attribute padho
* 🖱️ `addEventListener()` → User action (click, input, mouse, etc.) par code chalao
*/
Bilkul! Ye kuch **mini tasks** hain jo `createElement()` aur `append()` ko strong bana denge. Inhe bina solution dekhe try karo.

### 🟢 Task 1 (Easy)

HTML:

```html
<div id="box"></div>
```

**Goal:**
JavaScript se ek `<h2>` banao jisme text ho:

```
Welcome
```

Aur usse `#box` ke andar append karo.

**Expected Output:**

```html
<div id="box">
  <h2>Welcome</h2>
</div>
```

---

### 🟢 Task 2

HTML:

```html
<div id="box"></div>
```

**Goal:**
Ek `<p>` aur ek `<button>` create karo.

* Paragraph: `I am learning JavaScript`
* Button: `Click Me`

Dono ko `#box` ke andar add karo.

**Expected Output:**

```html
<div id="box">
  <p>I am learning JavaScript</p>
  <button>Click Me</button>
</div>
```

---

### 🟢 Task 3

HTML:

```html
<div id="box"></div>
```

**Goal:**
JavaScript se ye structure banao:

```html
<div id="box">
  <h1>My Website</h1>
  <p>This is my first DOM project.</p>
</div>
```

---

### 🟢 Task 4 (Thoda Challenging)

HTML:

```html
<ul id="list"></ul>
```

**Goal:**
JavaScript se 3 `<li>` create karo:

* Apple
* Mango
* Orange

Aur unhe `<ul>` ke andar append karo.

**Expected Output:**

```html
<ul id="list">
  <li>Apple</li>
  <li>Mango</li>
  <li>Orange</li>
</ul>
```

---

### 🟢 Task 5 (Best Practice)

HTML:

```html
<div id="box"></div>
```

**Goal:**
Loop (`for`) ka use karke 5 paragraphs create karo:

```
Paragraph 1
Paragraph 2
Paragraph 3
Paragraph 4
Paragraph 5
```

Aur sabko `#box` ke andar append karo.

---

## 💡 Challenge Rule

Har task me ye steps follow karo:

1. `querySelector()` se parent select karo.
2. `createElement()` se element banao.
3. `innerText` set karo.
4. `append()` se parent ke andar add karo.

Jab Task 1 complete ho jaye, apna code bhejna. Main sirf hint dunga, direct solution nahi, taaki concept aur clear ho.
Great! Agar tumne `createElement()` aur `append()` samajh liya hai, to ab `setAttribute()`, `getAttribute()`, aur `addEventListener()` par practice karo.

---

## 🟢 Task 1: setAttribute()

HTML:

```html
<div id="box"></div>
```

**Goal:**

JavaScript se ek `<a>` (anchor) create karo.

* Text: `Visit Google`
* `href` ko `https://www.google.com` set karo.
* `target` ko `_blank` set karo.
* `#box` ke andar append karo.

**Hint:**

* `createElement("a")`
* `setAttribute()`
* `append()`

---

## 🟢 Task 2: getAttribute()

HTML:

```html
<img id="photo" src="cat.jpg" alt="Cute Cat">
```

**Goal:**

Console me print karo:

* `src`
* `alt`

**Expected Console:**

```text
cat.jpg
Cute Cat
```

---

## 🟢 Task 3: setAttribute() + getAttribute()

HTML:

```html
<img id="photo">
```

**Goal:**

1. `src` ko `"dog.jpg"` set karo.
2. `alt` ko `"Cute Dog"` set karo.
3. Phir `getAttribute()` se dono values console me print karo.

---

## 🟢 Task 4: addEventListener()

HTML:

```html
<button id="btn">Click Me</button>
```

**Goal:**

Button par click karne par console me print ho:

```text
Button Clicked!
```

---

## 🟢 Task 5: Change Text on Click

HTML:

```html
<p id="text">Hello</p>
<button id="btn">Change Text</button>
```

**Goal:**

Button click hote hi paragraph ka text ho jaye:

```text
Welcome to JavaScript
```

---

## 🟢 Task 6: Change Color

HTML:

```html
<div id="box">Hello</div>
<button id="btn">Change Color</button>
```

**Goal:**

Button click karne par:

* Background color → `blue`
* Text color → `white`

---

## 🟢 Task 7: Count Button Clicks

HTML:

```html
<button id="btn">Click Me</button>
<p id="count">0</p>
```

**Goal:**

Har click par number 1 se badhta jaye.

Example:

```
0
1
2
3
4
```

---

## 🟢 Task 8 (Mixed Challenge ⭐)

HTML:

```html
<div id="box"></div>
<button id="btn">Create Link</button>
```

**Goal:**

Button click hone par:

1. Ek `<a>` create karo.
2. Text: `Open YouTube`
3. `href`: `https://www.youtube.com`
4. `target`: `_blank`
5. `#box` ke andar append karo.

Is task me tum use karoge:

* ✅ `createElement()`
* ✅ `setAttribute()`
* ✅ `addEventListener()`
* ✅ `append()`

Ye real DOM manipulation ki achhi practice hai.

**Suggestion:** Pehle Tasks 1–5 solve karo. Agar woh ho jayein, to Tasks 6–8 kaafi aasaan lagenge.
