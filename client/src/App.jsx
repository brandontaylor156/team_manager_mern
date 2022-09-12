import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Players from './views/Players';
import Status from './views/Status';

function App() {
    return (
    <div className="container border border-dark mt-5 p-3">
        <div className="d-flex gap-3">
            <Link to="/players/list"><h1>Manage Players</h1></Link>
            <Link to="/status/game/1"><h1>Manage Player Status</h1></Link>
        </div>
         <Routes>
            <Route path="/" element={<Navigate to={'/players/list'}/>} />
            <Route path="/players/*" element={<Players />} />
            <Route path="/status/game/*"  element={<Status />} />
         </Routes>                         
    </div>
    );
}
export default App;
