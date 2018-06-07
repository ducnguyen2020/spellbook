
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
        this.spells = []
        this.template = document.querySelector('.spell.template')
    
        const form = document.querySelector('#spellform')
        form.addEventListener('submit', (ev) => {
          ev.preventDefault()
          this.handleSubmit(ev)
        })
      },
    
      renderProperty: function(name, value) {
        const el = document.createElement('span')
        el.classList.add(name)
        el.textContent = value
        el.setAttribute('title', value)
        return el
      },
    
      renderItem: function(spell) {
        const item = this.template.cloneNode(true)
        item.classList.remove('template')
    
        // ['name', 'level']
        const properties = Object.keys(spell)
    
        properties.forEach(property => {
          const el = item.querySelector(`.${property}`)
          el.textContent = spell[property]
          el.setAttribute('title', spell[property])
        })
    
        // add the delete button
        item
          .querySelector('button.delete')
          .addEventListener(
            'click',
            this.removeSpell.bind(this, spell)
          )
    
        // add the fav button

        item
          .querySelector('button.fav')
          .addEventListener(
            'click',
            this.favFunc.bind(this)
          )


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
        return item
      },
    

      removeSpell: function(spell, ev) {
        // Remove from the DOM
        const button = ev.target
        const item = button.closest('.spell')
        item.parentNode.removeChild(item)
    
        // Remove from the array
        const i = this.spells.indexOf(spell)
        this.spells.splice(i, 1)
      },
    

      favFunc: function(){
        console.log(this.parentNode.parentNode)
      },

      handleSubmit: function(ev) {
        const f = ev.target
    
        const spell = {
          name: f.spellName.value,
          level: f.level.value,
        }
    
        this.spells.push(spell)
    
        const item = this.renderItem(spell)
    
        const list = document.querySelector('#spells')
        list.appendChild(item)
    
        f.reset()
        f.spellName.focus()
      },
    }
    
    app.init()

