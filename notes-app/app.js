//const fs = require('fs')
 
//fs.writeFileSync('notes.txt', 'My name is Andrew.')

//fs.appendFileSync('notes.txt','Valenzuela')

//const add = require('./utils.js')

//const sum = add(4, -2)
 
//console.log(sum)

//const validator = require('validator')
//const getNotes = require('./notes-getNotes.js')
const notes = require('./notes-getNotes.js')
const yargs = require('yargs')
const chalk = require('chalk')
//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
command: 'add',
describe: 'Add a new note',
builder:{
    title:{
    describe:'Note title',
    demandOption:true,
    type: 'string'}
},
    body:{
    describe:'Note body',
    demmandOption:true,
    type:'string'
},
handler(argv){
    //console.log('Title: ' + argv.title)
   //console.log('Body: ' + argv.body)
     notes.addNote(argv.title, argv.body )
}}
)
//create remove command
yargs.command({
command: 'remove',
describe: 'Remove a note',
builder:{
    title:{
    describe: 'Note title',
    demandOption:true,
    type: 'string'
    }     
},
handler: function (argv){
    //console.log('Removing the note!')
    notes.removeNote(argv.title)
}
})
//create a list command
yargs.command({
    command:'list',
    describe: 'List a note',

    handler(){
        notes.listNotes()
    }
})
//create a read command
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
        describe: 'note title',
        demandOption:true,
        type: 'string'
        }     
    },
     handler(argv){
    //console.log('Reading a note!')
    notes.readNote(argv.title)
    }
})
yargs.parse()
 //console.log(yargs.argv)

 