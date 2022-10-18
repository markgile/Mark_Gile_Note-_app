const add = require('./add')
const read = require('./read')
const write = require('./write')
const cmd = process.argv
const del = require ('./del')

// get user input
const data = process.argv

var note = {}

if(data[2] == 'add') {
    //Build Object
    note = {
        id: data[3],
        title: data[4],
        body: data[5]
    }
    // Get old note value
    var oldNote = read()
    // Add note to note.txt
    add(note,oldNote)

    console.log(read());
}

if(data[2] == 'read') {
    // Import present
    const present = require('./present')

    present(read())
}

if(data[2] === 'delete'){
    let id = data[3]
    let oldNote = read()
    let del = require('./del')
    del(id, oldNote)

    console.log(read());
}