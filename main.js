
let h5 = document.createElement("h5")
h5.innerHTML = "Other Social Media"
h5.style.color = "ffffff"
document.body.appendChild(h5)

let ul1 = document.createElement("ul")
document.body.appendChild(ul1)

let a1 = document.createElement("a")
a1.innerText = "LinkedIn"
a1.setAttribute("href", "https://www.linkedin.com/in/liliya-mukhamejanova-465847231")

let li1 = document.createElement("li")
li1.style.color = "c9c0a5"
li1.appendChild(a1) 
ul1.appendChild(li1)

let a2 = document.createElement("a")
a2.innerText = "Tumblr"
a2.setAttribute("href", "https://slylin.tumblr.com")

let li2 = document.createElement("li")
li2.style.color = "c9c0a5"
li2.appendChild(a2)
ul1.appendChild(li2)

let a3 = document.createElement("a")
a3.innerText = "Instagram"
a3.setAttribute("href", "https://www.instagram.com/sliliyan")

let li3 = document.createElement("li")
li3.style.color = "c9c0a5"
li3.appendChild(a3)
ul1.appendChild(li3)

let li4 = document.createElement("li")
li4.innerHTML = "Telegram: @holyguagomole"
li4.style.color = "c9c0a5"
ul1.appendChild(li4)

let li5 = document.createElement("li")
li5.innerHTML = "WhatsApp: +7 707 462 71 54"
li5.style.color = "c9c0a5"
ul1.appendChild(li5) 

console.log(document);