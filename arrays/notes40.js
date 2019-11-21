const notes = ['note 1', 'note 2', 'note3']
const objNotes = [{ name: 'tyler', age: 42 }, { name: 'drew', age: 27}]

let fthis = 42

notes.forEach(function(curVal, index, array, cbthis){
    console.log('curVal: ', curVal)
    console.log('index: ', index)
    console.log('array: ', array)
    console.log('this: ', cbthis)
})


