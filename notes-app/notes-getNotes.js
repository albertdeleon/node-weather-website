//console.log('notes-getNotes.js')
const chalk = require('chalk')
const fs = require('fs')
//const getNotes = function(){ return 'Your notes...'
//}

const addNote =  (title, body) =>{
const notes = loadNotes()
// const duplicateNotes = notes.filter((note)=>note.title === title)
const duplicateNote = notes.find((note)=> note.title === title)

//console.log(duplicateNote)
//console.log(title)



//if (duplicateNotes.length === 0)
if(!duplicateNote) {
    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
}else{
    console.log(chalk.red.inverse('Note title taken!'))
}
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
fs.writeFileSync('notes.json', dataJsON)
}
const loadNotes = function (){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
   }catch(e){
    return[]
    }

  
    }

    const removeNote = (title, body)=>{
        //console.log(title) 
        const notes = loadNotes()
        const notesToKeep = notes.filter((note)=>note.title !== title)
       if (notes.length > notesToKeep.length){
           
            console.log(chalk.green.styled('Remove note!'))
            saveNotes(notesToKeep)
     }else{
            console.log(chalk.red.styled('No note found!'))
        }
        
    }   

    const listNotes = () =>{
        const notes = loadNotes()
        console.log(chalk.inverse('your notes'))

      notes.forEach((note)=>{
        console.log(note.title)
      })

    }
    const readNote = (title) => {
        const notes = loadNotes()
        const note = notes.find((note)=> note.title === title)
        if(note) {
            console.log(chalk.inverse(note.title))
            console.log(note.body)
        }else{
            console.log(chalk.red.inverse('Note not found'))
        }
        }

    


//module.exports = getNotes 
module.exports = {
    //getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}


