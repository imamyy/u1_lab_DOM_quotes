// TODO: [1] Select the <body>
document.querySelector("body");
// TODO: [2] Select the <header>
document.querySelector("header");
// TODO: [3] Select all of the elements with class "quote"
document.querySelector(".quote");
// TODO: [4] Select all of the subject elements
document.querySelectorAll(".subject");
// TODO: [5] Select the navigation links
document.querySelectorAll("a");
// TODO: [6] Select all the quotes in the "life" section.
console.log(document.querySelector(".life").querySelectorAll(".quote"));
// TODO: [7] Using relative selection, select the <p> element containing the second Mark Twain quote
console.log(document.querySelectorAll("p")[3]);
// TODO: [8] Do the same using a query selector
console.log(document.querySelector("#mark-twain-second").querySelector("p"));
// TODO: [9] Select the 'Quotes About Motivation' heading
console.log(document.querySelector(".motivation").querySelector("p"));
// TODO: [10] -  Add a class 'simplicity' to the first subject.
document.querySelector(".subject").classList.add("simplicity");
console.log(document.querySelector(".subject").classList);
// BONUS
// TODO: [11] Create an element with the text of your favorite quote.
const myQuote = document.createElement("p");
myQuote.innerText = "Live to the fullest.";
const myArticle = document.createElement("article");
myArticle.classList.add("quote");
const myBlock = document.createElement("blockquote");
myArticle.appendChild(myBlock).appendChild(myQuote);
document.querySelector("section").appendChild(myArticle);
console.log(myQuote.innerText);
// TODO: [12] Add the element that you created in the previous step to the layout by appending it to a corresponding subject section.

// TODO: [13] Add the author's last name, as a class name, to one of the quotes.
myArticle.classList.add("Tran");
console.log(myArticle.classList);
