
import Subject from './lib/Subject.js'
import Observer from './lib/Observer.js'

const controlCheckbox = document.getElementById("mainCheckbox"),
      addBtn = document.getElementById("addNewObserver"),
      container = document.getElementById("observersContainer")


extend(controlCheckbox, new Subject())

controlCheckbox.onclick = function() {
   controlCheckbox.notify(controlCheckbox.checked)
}

addBtn.onclick = addNewObserver

function addNewObserver() {
   const check = document.createElement("input")

   check.type = "checkbox"

   extend(check, new Observer())

   check.update = function(value) {
      this.checked = value
   }

   controlCheckbox.addObserver(check)

   container.appendChild(check)
}

function extend(obj, extension) {
   for (const key in extension) {
      obj[key] = extension[key]
   }
}