const todos = ['homework', 'laundry', 'punt', 'exercise']


// delete the 3rd item

todos.splice(2, 1)
console.log(todos)

// add a new item to the end

todos.push('add item to end')
console.log(todos)

// remove the first item

todos.shift()
console.log(todos)