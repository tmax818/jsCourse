const notes = [
    {
        title: "My next trip",
        body: "I would like to go to Spain"
    }, {
        title: "Habbits to work on",
        body: "Exercise, coding structure"
    }, {
        title: "each other",
        body: "sothing goes here later"
    }

]

let poped = notes.pop() // removes an item from the end
notes.push('My new pushed note')

//A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

notes.forEach(function (item, index){
    console.log(index, item)
})  


console.log(notes)
console.log(notes.length)
console.log(poped)

//Counting

for(let i = 0; i <= 100; i++){
    console.log(i)

}

// .push

