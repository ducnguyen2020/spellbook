
const button1 = document.querySelector(".but1")
const button2 = document.querySelector(".but2")
const inputField = document.querySelector("input")
const submit1 = document.querySelector("#submit")

const spellarray = []

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



    const app = {
        init: function() {
          const form = document.querySelector('#spellform')
          form.addEventListener('submit', ev => {
            this.handleSubmit(ev)
          })
        },
      
        renderProperty: function(name, value) {
          const el = document.createElement('span')
          el.textContent = value
          el.classList.add(name)
          return el
        },
      
        renderItem: function(spell) {
          // ['name', 'level']
          properties = Object.keys(spell)
      
          // collect an array of renderProperty's return values
          // (an array of <span> elements)
          const childElements = properties.map(property => {
            return this.renderProperty(property, spell[property])
          })
      
          const item = document.createElement('li')
          item.classList.add('spell')
      
          // append each <span> to the <li>
          childElements.forEach(el => {
            item.appendChild(el)
          })
      
          return item
        },
      
        handleSubmit: function(ev) {
          ev.preventDefault()
      
          const f = ev.target
      
          const spell = {
            name: f.spellName.value,
            level: f.level.value,
          }
      
          const item = this.renderItem(spell)
          spellarray.push(spell)

          const list = document.querySelector('#spells')
          list.appendChild(item)
          console.log(spellarray)
      
          f.reset()
        },
      }
      
      app.init()

