const listElement = document.querySelector('#app ul')
const inputElement = document.querySelector('#app input')
const btnElement = document.querySelector('#app button')
 
const todos = JSON.parse(localStorage.getItem('list_todos')) || [] // atualiza a lista 
// com os todos salvos no localStore e caso não haja nenhum ele atualiza o array vazio

function renderTodos(){

  // Atualiza a lista para que seja carregado somente o novo todo 
  listElement.innerHTML = ''

  // FOR especifico para arrays
  // Vai percorrer todo o array e colocar dentro de todo

  for (todo of todos) {

    // criando os elementos

    var liElement = document.createElement('li')
    liElement.style.listStyle = 'none'
    liElement.style.fontWeight = 'bold'
    liElement.style.fontFamily = 'Roboto'

    var liText = document.createTextNode(todo)

    var linkElement = document.createElement('a')
    linkElement.setAttribute('href', '#')
    linkElement.style.marginLeft = '10px'
    linkElement.style.color = '#f00'
    linkElement.style.textDecoration = 'none'

    // Procurando a posição do todo

    var index = todos.indexOf(todo)
    linkElement.setAttribute('onclick' , 'deleteTodo(' + index + ')')

    var linkText = document.createTextNode('Excluir')


    linkElement.appendChild(linkText)

    liElement.appendChild(liText)
    liElement.appendChild(linkElement)

    listElement.appendChild(liElement)
  }  
}
renderTodos()

function addTodo() {
  const liText = inputElement.value

  todos.push(liText)
  inputElement.value = ''
  renderTodos()
  saveToStorege()
}

btnElement.onclick = addTodo

// Deletando os Todos

function deleteTodo(index) {
  todos.splice(index, 1) // aqui estou falando que na posição (index) onde estiver, exlua o primeiro item que existe nela.
  renderTodos() // atualiza a lista
  saveToStorege()
}

// Salvando os todos no LocalStorege

function saveToStorege() {
  localStorage.setItem('list_todos', JSON.stringify(todos))
}