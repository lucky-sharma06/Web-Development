document.querySelector(".box");
document.querySelector(".box").innerHTML;
document.querySelector(".box").outerHTML;
document.querySelector(".box").tagName;
document.querySelector(".box").nodeName;
document.querySelector(".box").innerText;
document.querySelector(".box").textContent;
document.querySelector(".box").outerHTML;
document.querySelector(".box").outerText;
document.querySelector(".box").innerHTML;
let c = document.querySelector(".box")
c.getAttribute("style")
c.setAttribute("style", "padding: 50px;")
c.attributes

// Insertion Methods
let div = document.createElement("div");
div.innerHTML = "Hi, I am inserted div";
div.setAttribute("class", "created");
document.querySelector(".container").append(div);

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("beforeend", "<b>I am under the water </b>");
//  element.remove() to remove the element
