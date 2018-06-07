
const button1 = document.querySelector(".but1")
const button2 = document.querySelector(".but2")
const inputField = document.querySelector("input")
const submit1 = document.querySelector("#submit")

const spellArray = []

function sayYeah1() {
    let heading = document.querySelector('h1')
    heading.textContent = "Changed"
  }

function sayYeah2() {
    //let heading = document.querySelectorAll('h1')[1]
    let heading = document.querySelector('h1.special')
    heading.textContent = "Changed"
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
            this.handleSubmit(ev);
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
      

          if (spell.name.includes('chop') || spell.name.includes('punch')){
            //  <img src="panda.png" id ="panda" alt ="">

            const chopmove = document.createElement('img')
            chopmove.setAttribute('src',`panda3.gif`)
            chopmove.setAttribute('id','panda3')
            chopmove.setAttribute('class','listimg')
            chopmove.setAttribute('alt', "")
            item.appendChild(chopmove)
          }
          
          if (spell.name.includes('eat') || spell.name.includes('roll')){
            //  <img src="panda.png" id ="panda" alt ="">

            const eatmove = document.createElement('img')
            eatmove.setAttribute('src',`pandaeat.gif`)
            eatmove.setAttribute('id','pandaeat')
            eatmove.setAttribute('class','listimg')
            eatmove.setAttribute('alt', "")
            item.appendChild(eatmove)
          }

          if (spell.name.includes('shower') || spell.name.includes('bath')){
            //  <img src="panda.png" id ="panda" alt ="">

            const showermove = document.createElement('img')
            showermove.setAttribute('src',`showerpanda.gif`)
            showermove.setAttribute('id','showerpanda')
            showermove.setAttribute('class','listimg')
            showermove.setAttribute('alt', "")
            item.appendChild(showermove)
          }


          const rmvel = document.createElement('button')
          rmvel.setAttribute('onclick',`delFunction(this,'${spell.name}','${spell.level}')`)
          rmvel.textContent = "Remove"
          rmvel.setAttribute('class','delBut')
          item.appendChild(rmvel)

          
          console.log(rmvel)
          return item
        },
      
        handleSubmit: function(ev) {
          ev.preventDefault()
      
          const f = ev.target
      
          const spell = {
            name: f.spellName.value,
            level: `Level ${f.level.value}`,
          }
          
          

          const item = this.renderItem(spell)
          spellArray.push(spell)

          const list = document.querySelector('#spells')
          list.appendChild(item)

          console.log(spellArray)
          f.reset()
        },
      }
      
      const delFunction = function(currentEl,name1,lvl1){
        currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
        for (var i = 0; i < spellArray.length; i++) {
            if (spellArray[i].name == name1 && spellArray[i].level == lvl1) {
                spellArray.splice(i, 1);
            }
          }
        console.log(spellArray)
      }

      app.init()

