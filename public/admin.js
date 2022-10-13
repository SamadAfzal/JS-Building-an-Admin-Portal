async function listBooks (){
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(renderBook)
}

function renderBook(book) {
    let root = document.getElementById('root');
    let li = document.createElement('li')
    li.textContent = book.title

    let inputs = document.createElement ('input')
    inputs.value = book.quantity

    let saveBtn = document.createElement ('button')
    saveBtn.addEventListener('click', updateBook)
    saveBtn.textContent = "saved!"

    li.appendChild(inputs)
    li.appendChild(saveBtn)
    root.appendChild(li)
}

    function updateBook (e){
    e.preventDefault()
    console.log ('clicked!')

    }
    listBooks()