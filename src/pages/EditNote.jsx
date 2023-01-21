import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NotePreview from './notePreview';

export default function EditNote(props) {

    const { state } = useLocation();
    const [title, setTitle] = useState(state.note.title);
    const [content, setContent] = useState(state.note.content);
    const navigate = useNavigate();

    async function handleEdit(e) {
        e.preventDefault();
        const note = {
            noteID: state.note.noteID,
            title: title,
            content: content,
        }
        await fetch('/notes', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        }).then(res => {
            if (res.status === 200) {
                alert('Note edited successfully');
                navigate('/dashboard');
            }
        }).catch(err => {
            alert('Error editing note');
            console.log(err);
        });
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
                        onClick={handleEdit}
                        disabled={title === '' || content === ''}
                    >Save</button>
                </div>
                <div id='notePreview'>
                    <NotePreview content={content} />

                </div>
            </div>
        </>
    );

}


