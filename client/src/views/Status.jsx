import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, Routes, Route, useNavigate, useParams} from 'react-router-dom'
import GameList from '../components/GameList'

const Status = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [gameNum, setGameNum] = useState(1)

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);


    return (
        <div className="container border border-dark">
            <h1>Player Status - Game {gameNum}</h1>
            <div className="d-flex gap-3">
                <Link to={"/status/game/1"}><h2>Game 1</h2></Link>
                <Link to={"/status/game/2"}><h2>Game 2</h2></Link>
                <Link to={"/status/game/3"}><h2>Game 3</h2></Link>
            </div>

            <Routes>
                <Route path="/:id" element={
                    loaded ? <GameList players={players} setPlayers={setPlayers} setGameNum={setGameNum}/> : <h2>LOADING</h2>} 
                />
            </Routes>
        </div>
    )
}

export default Status
