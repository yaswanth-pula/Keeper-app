import React, {useState} from 'react';
import Header from './Header';
import Note from './Note';
import NewNote from './NewNote';
import Footer from './Footer';

function App(){
    const [notes,setNotes] = useState([]);
    
    function addNewNotes(newNote){
        setNotes(prev=>[...prev,newNote]);
    }

    function deleteNotes(id){   
        setNotes(prev=>{
            return prev.filter((note,index)=>{
                return (index!==id)
            });
        });
    }
    return (
        <div>
            <Header />
            <NewNote addnote={addNewNotes}/>
             {notes.map((note,index) => (
                <Note 
                    key={index} 
                    id={index} 
                    title={note.title} 
                    content={note.content} 
                    delete ={deleteNotes}    
                    />
                ))
             }
            <Footer />
        </div>
    );
}

export default App;