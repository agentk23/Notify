import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardNote(note) {
    const key = note.key;
    const data = note.data;
    const navigate = useNavigate();

    async function handleDelete(e){
        
    }
    async function handleEdit(e){
        navigate('/dashboard/' + data.noteID, {state: {note: data}});
    }

    return (
        <li key={key}>
            <div className="noteListItem">
                <div className="noteID">
                    {data.noteID}
                </div>
                <div className="noteTitle">
                    {data.title}
                </div>
                <div className="noteCreatedAt">
                    {data.createdAt}
                </div>
                <div className="noteUpdatedAt">
                    {data.updatedAt}
                </div>
                <div className="noteListItemBtn">
                <button
                    className="listBtn noteDeleteButton"
                    onClick={handleDelete}
                    
                >Delete</button>
                <button
                    className="listBtn noteEditButton"
                    onClick={handleEdit}
                >Edit</button>
                </div>
            </div>
                
              
        </li>
    );
}

export default DashboardNote;