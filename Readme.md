
# Assignment Questions and Answers  

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- **getElementById("id")**
  - `id` দিয়ে নির্দিষ্ট element কে খুজে আনতে ব্যাবহার করা হয়।
  - এটি শুধুমাত্র একটি element return করে।

- **getElementsByClassName("class")**
  - এর দ্বারা একাধিক element শনাক্ত করা যায়।
  - এটি অনেক গুলো html কে একটি ফাংশনের ভেতর আনতে সাহায্য করে।


- **querySelector("selector")**
  - এটি শুধুমাত্র প্রথম element কে return করে।
  -  শুধু প্রথম matching element রিটার্ন করে।

- **querySelectorAll("selector")**
  - একাধিক element  একসাথে থাকতে পারে।
  - CSS selector দিয়ে সব matching element রিটার্ন করে।



## 2. How do you create and insert a new element into the DOM?

1. নতুন element তৈরি করতে হয়:
 -  javascript
 -  const newDiv = document.createElement("div");
 -  newDiv.textContent = "this is a readme file";


 ## 3. What is Event Bubbling and how does it work?
 -  Event bubbling মানে হলো কোনো event (যেমন click) প্রথমে যেই    child   element এ ঘটে, সেখান থেকে তার parent, তারপর grandparent   element পর্যন্ত উপরে উপরে propagate (ছড়িয়ে) যায়।

 ## 4. What is Event Delegation in JavaScript? Why is it useful?

- Event Delegation হলো parent element এ event listener বসানো, যাতে তার ভেতরের child element গুলোর event হ্যান্ডেল করা যায়।
- এটা useful কারণ:
- একসাথে অনেক child এর জন্য আলাদা listener বসাতে হয় না।
- Future এ নতুন child element যোগ হলেও কাজ করবে

## 5. What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault()
- কোনো element এর default behavior বন্ধ করে।

- stopPropagation()
- Event bubbling বন্ধ করে।