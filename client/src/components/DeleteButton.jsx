import React from 'react'
import axios from 'axios';
    
const DeleteButton = props => {
    
    const { playerId, successCallback } = props;
    
    const deletePlayer = () => {
        axios.delete('http://localhost:8000/api/players/' + playerId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <button className="btn btn-danger" onClick={deletePlayer}>
            Delete
        </button>
    )
}

export default DeleteButton
