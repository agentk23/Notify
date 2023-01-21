import React from 'react';
import { useContext, useState, useEffect, Children } from 'react';
import { AuthContext } from '../context/authContext';
import DashboardNote from './dashboardNote';

function Dashboard(props) {
    const [notes, setNotes] = useState([]);
    const currentUser = useContext(AuthContext);

    useEffect(() => {
        fetch('/notes?' + new URLSearchParams({uid: currentUser.uid}), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => {
            if (res.status === 200) {
               return res.json();
            }
        }).then(data => {
            setNotes(data);
            console.log(notes);
        }).catch(err => {
            alert('Error fetching notes');
            console.log(err);
        });
    }, [currentUser.uid]);
    return (
        <div>
            <div className="noteList">
                <div className=" noteListModel ">
                    <div className="modelID">
                        <p className='model'>ID</p>
                    </div>
                    <div className="modelTitle">
                        <p className='model'>Title</p>
                    </div>
                    <div className="modelCreatedAt">
                        <p className='model'>Created At</p>
                    </div>
                    <div className="modelUpdatedAt">
                        <p className='model'>Updated At</p>
                    </div>
                    <div className="placeholder">
                        <button className="placeholder"></button>
                        <button className="placeholder"></button>
                        <button className="placeholder"></button>
                        <button className="placeholder"></button>
                    </div>
                </div>
                {notes.map((note) => <DashboardNote key={note.ID} data={note}/>)}
            </div>
        </div>
    );
}

export default Dashboard;