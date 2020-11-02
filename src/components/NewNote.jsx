import React, { useState } from 'react';

function NewNote(props){
    const [newNote,setNewNote] = useState({
        title:"",content:""
    });

    function handleChange(event){
        const {name,value} = event.target;
        setNewNote(prev=>{
            return {
                ...prev,[name]:value
            }
        })
    }

    return(
        <form>
            <input 
                onChange = {handleChange}
                value={newNote.title}
                name="title"
                placeholder="Title"
            />
            <textarea
             onChange = {handleChange}
                value={newNote.content}
                name="content"
                placeholder="Take a note"
             />
             <button 
                onClick={(event)=>{
                        props.addnote(newNote);
                        setNewNote({title:"",content:""});
                        event.preventDefault();
                    }}
             >Add</button>
        </form>
    );
}

export default NewNote;