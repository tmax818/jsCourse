let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 375
}

let otherBook = {
    title: "A People's History",
    author: "Howard Zinn",
    pageCount: 723
}

let getSummary = function(book){
    console.log(`${book.title} by ${book.author}`)
}

getSummary(myBook)