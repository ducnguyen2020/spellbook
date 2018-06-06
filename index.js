console.log('testing')
const button1 = document.querySelector(".but1")
const button2 = document.querySelector(".but2")
const inputField = document.querySelector("input")
const submit1 = document.querySelector("#submit")

function sayYeah1() {
    let heading = document.querySelector('h1')
    heading.textContent = "Changed the first headline"
  }

function sayYeah2() {
    //let heading = document.querySelectorAll('h1')[1]
    let heading = document.querySelector('h1.special')
    heading.textContent = "Changed the second headline"
  }

function myFunction(){
    let heading2 = document.querySelectorAll('h1')
    let x = document.getElementById("frm1")[0].value;
    //let x = document.getElementsByTagName("input")[0].value;
    heading2[2].textContent = x
}


function submit(){
    let heading2 = document.querySelectorAll('h1')
    let x = document.getElementById("text").value;
    heading2[2].textContent = x
}


button1.addEventListener('click', sayYeah1)
button2.addEventListener('click', sayYeah2)
submit1.addEventListener('click',submit)

inputField.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        submit1.click();
    // Trigger the button element with a click
    }
    
    });


const formText = document.querySelector("#formInput")
const formButton = document.querySelector("#formButton")

function formSubmit(){
    let heading2 = document.querySelectorAll('h1')
    let x = document.getElementById("formInput").value;
    heading2[3].textContent = x
}
formButton.addEventListener('click', formSubmit)
formText.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        formButton.click();
    // Trigger the button element with a click
    }
    
    });

const spellform = document.querySelector('#spellform')

const spellAdd = function(ev) {
      ev.preventDefault()

      const f = ev.target
      const spellName = f.spellName.value
    
      const spellsDiv = document.querySelector('#spells')
      const spellDes = f.spellDescription.value

      //spellsDiv.innerHTML += `<li>${spellName} : ${spellDes}</li>`
      let textnode1 = document.createTextNode(spellName);
      let textnode2 = document.createTextNode(spellDes);
      let textnode3 = document.createTextNode(" : ");

      let node = document.createElement("LI");   
    
      let span1 = document.createElement("span")
      span1.setAttribute("class", "spellclass")
      let span2 = document.createElement("span")
      span2.setAttribute("class", "desclass")
      let span3 = document.createElement("span")
      span3.setAttribute("class", "span3class")

     
      span1.appendChild(textnode1);
      span2.appendChild(textnode2);
      span3.appendChild(textnode3);

      node.appendChild(span1);  
      node.appendChild(span3);
      node.appendChild(span2);
    

      
      spellsDiv.appendChild(node);

    
      f.reset()
    }

    
    
spellform.addEventListener('submit', spellAdd)

