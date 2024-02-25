/* 1.1 Inserta dinamicamente en un html un div vacio con javascript. */
const newDiv = document.createElement('div')
document.body.appendChild(newDiv)
console.log(newDiv)
/* 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */
const pDiv = document.createElement('div')
const p = document.createElement('p')

pDiv.appendChild(p)
document.body.appendChild(pDiv)
/* 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript. */
const divLoop = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p')
  divLoop.appendChild(p)
}
document.body.appendChild(divLoop)
/* 1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'. */
const dinamicP = document.createElement('p')
dinamicP.textContent = 'Soy dinámico!'
document.body.appendChild(dinamicP)
/* 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */
const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'
document.body.appendChild(h2)
/* 1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array. */
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
for (const app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
}
document.body.appendChild(ul)
/* 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me */
const eliminateAll = document.querySelectorAll('.fn-remove-me')
for (const eliminate of eliminateAll) {
  eliminate.remove()
}
/* 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */
const allDivs = document.querySelectorAll('div')
const pBefore = document.createElement('p')
pBefore.textContent = 'Voy en medio!'
document.body.insertBefore(pBefore, allDivs[1])
/* 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here */
const classDiv = document.querySelectorAll('.fn-insert-here')
for (const div of classDiv) {
  const paragraph = document.createElement('p')
  paragraph.textContent = 'Voy dentro!'
  div.appendChild(paragraph)
}
