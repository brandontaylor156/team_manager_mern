import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, Routes, Route, useNavigate} from 'react-router-dom'
import PlayerList from '../components/PlayerList';
import PlayerForm from '../components/PlayerForm';

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[players]);

    const createPlayer = player => {
        axios.post('http://localhost:8000/api/players', player)
            .then(res => setPlayers([...players, res.data]))
            .then(() => navigate('/players/list'))
    }

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
    }

    return (
        <div className="container border border-dark">
            <div className="d-flex gap-3">
                <Link to={"/players/list"}><h2>List</h2></Link>
                <Link to={"/players/addplayer"}><h2>Add Player</h2></Link>
            </div>
            <Routes>
                <Route path="/list" 
                    element={
                        loaded ?
                        <PlayerList 
                            players={players} 
                            removeFromDom={removeFromDom}
                        /> :
                        <h3>LOADING</h3>
                    }
                />
                <Route
                    path="/addplayer"
                    element={
                    <PlayerForm 
                                initialName="" 
                                initialPosition="" 
                                onSubmitProp={createPlayer}
                            />
                            }
                    />
            </Routes>
        </div>
    )
}

export default Players
