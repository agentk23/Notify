import React from 'react';
import { useState, useContext } from 'react';
import NotePreview from './notePreview';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
const contentInitialState = `
![image](https://dodo.ac/np/images/0/01/Small_Silk_Hat_%28Black%29_NH_Icon.png)
## Try CommonMark

You can try CommonMark here.  This dingus is powered by
[commonmark.js](https://github.com/commonmark/commonmark.js), the
JavaScript reference implementation.

1. item one
2. item two
   - sublist
   - sublist

`;
function CreateNote() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState(contentInitialState);
    const currentUser = useContext(AuthContext);
    const navigate = useNavigate();
    
    
    async function handleSave(e) {
        e.preventDefault();
       
        await fetch('/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                 title: title,
                 content: content,
                 uid: currentUser.uid,
            }),
        }).then(res => {
            if(res.status === 201) {
                alert('Note saved successfully');
                navigate('/dashboard');
            }
        }).catch(err => {
            alert('Error saving note');
            console.log(err);
        }
        );
    }

    return (
        <>
            <div className="container">
                <div id='noteHeader'>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        autoComplete='off'
                        placeholder='Enter your title'
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div id='noteContent'>
                    <textarea
                        name="content"
                        id="content"
                        autoComplete='off'
                        placeholder='....'
                        cols={50}
                        rows={30}
                        value={content}
                        onChange={(e) => { setContent(e.target.value) }}
                    />
                </div>
                <div id='noteButtons'>
                    <button
                        onClick={handleSave}
                        disabled={title === '' || content === ''}
                    >Save</button>
                </div>
                <div id='notePreview'>
                    <NotePreview content={content}/>
                        
                </div>
            </div>
        </>
    );
}

export default CreateNote;