import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate, Routes, Route } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';
import PlayerForm from '../components/PlayerForm'
    
const PlayerDetails = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState({})
    const [loaded, setLoaded] = useState(false)

    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/players/' +id)
            .then(res => {
                setPlayer(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    });
    
    return (
        <div>
            <h1>Player Details</h1>
            {loaded ?
            <>
                <p>Player Name: {player.name}</p>
                <p>Position: {player.position}</p>
                <p>Game Schedule:</p>

                <div className="row">
                    <div className="col-4">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Game</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {
                                    player.gameStatus.map((gameStat, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{gameStat}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="d-flex gap-2 mb-2">
                    <DeleteButton playerId={player._id} successCallback={() => navigate('/')} />
                    <button onClick={()=> navigate('/')} className="btn btn-warning">Cancel</button>
                </div>
            </>
            :
            <h2>LOADING</h2>}
        </div>
    )
}

export default PlayerDetails;