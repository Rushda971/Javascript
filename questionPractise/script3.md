Samajh gaya 😄
Tumhe woh wale questions chahiye jo actual products/apps me use hote hain — Flipkart, YouTube, Swiggy, WhatsApp type logic.

Yeh lo aur ache real-world function practice questions 👇

---

# 1. Amazon Cart Quantity Update

Create functions:

```js id="24q4kw"
addToCart(product)
removeFromCart(product)
showCart()
```

Rules:

* same product add karo → quantity increase ho
* remove karo → quantity decrease ho

Example cart:

```js id="x1v4q0"
[
  { name: "Shoes", qty: 2 },
  { name: "Watch", qty: 1 }
]
```

---

# 2. YouTube Search Debounce

User fast typing kare:

```txt id="w1j9tx"
r
re
rea
react
```

API sirf last input pe call ho:
`react`

Implement:

* debounce function
* `setTimeout`
* `clearTimeout`

---

# 3. Swiggy Delivery Fee

Function:

```js id="rtjlwm"
calculateDelivery(distance, orderAmount)
```

Rules:

* order > 500 → free delivery
* else:

  * first 5 km → ₹40
  * after 5 km → ₹10/km extra

---

# 4. Instagram Like Toggle

Create post object:

```js id="2u4a6k"
{
  likes: 10,
  isLiked: false
}
```

Function:

* if liked → unlike
* if unliked → like

Update likes count accordingly.

---

# 5. Netflix Subscription Checker

Function:

```js id="4kt5xz"
canWatch(plan, deviceCount)
```

Rules:

* Mobile → 1 device
* Standard → 2 devices
* Premium → 4 devices

Return:

* `"Allowed"`
* `"Upgrade Plan"`

---

# 6. Zomato Coupon System

Function:

```js id="kjw6t0"
applyCoupon(code, amount)
```

Coupons:

* `SAVE10` → 10% off
* `FLAT100` → ₹100 off above ₹999

---

# 7. WhatsApp Last Seen

Function:

```js id="a8l2mv"
lastSeen(minutes)
```

Output examples:

```txt id="8u6mep"
online
last seen 5 min ago
last seen 2 hours ago
```

---

# 8. Ola/Uber Fare Calculator

Function:

```js id="vjlwm5"
calculateFare(km, surge)
```

Rules:

* base fare ₹50
* ₹12/km
* multiply by surge pricing

---

# 9. Flipkart Product Filter

Products:

```js id="8l3tx1"
[
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 60000 }
]
```

Create function:

```js id="n7q1dz"
filterProducts(maxPrice)
```

Return only affordable products.

---

# 10. Google OTP Expiry

Generate OTP with expiry.

Rules:

* valid only for 30 seconds
* after that `"OTP Expired"`

Use:

* closures
* `setTimeout`

---

# 11. Spotify Playlist

Functions:

* addSong
* removeSong
* shufflePlaylist

---

# 12. Twitter Character Counter

Function:

```js id="yjlwm2"
checkTweet(tweet)
```

Rules:

* max 280 chars
* return remaining chars

---

# 13. Ecommerce Wishlist Toggle

Like Flipkart heart icon ❤️

If item exists:

* remove from wishlist

Else:

* add to wishlist

---

# 14. Food App Rating System

Store ratings in array.

Functions:

* addRating
* averageRating

---

# 15. PhonePe Wallet Transfer

Function:

```js id="qux9w3"
transfer(senderBalance, amount)
```

Rules:

* insufficient balance
* successful transfer
* minimum balance check

---

# 16. Railway Seat Booking

Seats:

```js id="w4f1sk"
50 total seats
```

Function:

* reserveSeat(count)

Rules:

* cannot overbook

---

# 17. Ecommerce Inventory System

Product stock decrease after order.

If stock = 0:

* `"Out of Stock"`

---

# 18. Flipkart Search Autocomplete

Input:

```txt id="j8r4vn"
iph
```

Suggestions:

```txt id="x3k1ta"
iPhone 13
iPhone 14
iPhone Charger
```

Use:

* `filter`
* `startsWith`

---

# 19. Banking Transaction History

Store transactions.

Functions:

* deposit
* withdraw
* miniStatement

---

# 20. Reels Infinite Scroll Logic

Function:

* when user reaches near bottom
* load more reels automatically

Simulate using functions + events.

---

Yehi type ke questions:

* frontend interviews
* React projects
* machine coding rounds
* internships
* real app development

me directly kaam aate hain 🔥
