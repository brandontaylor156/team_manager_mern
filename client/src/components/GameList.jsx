import {useParams} from 'react-router-dom'
import {useEffect} from 'react'

const GameList = (props) => {
    const {players, setPlayers, setGameNum} = props
    const {id} = useParams()

    const handleClick = (index) => {
        
    }

    useEffect(()=>{
        setGameNum(id)
    },[id]);
    
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {players.map( (player, i) => {
                return(
                    <tr key={i}>
                        <td className="align-middle">{player.name}</td>
                        <td>
                            {player.gameStatus[id-1] == "playing" &&
                                <div className="d-flex gap-2">
                                    <button onClick={() => handleClick(i)} value="playing" className="btn btn-success">Playing</button>
                                    <button onClick={() => handleClick(i)} value="not_playing" className="btn">Not Playing</button>
                                    <button onClick={() => handleClick(i)} value="undecided" className="btn">Undecided</button>
                                </div>
                            }
                            {player.gameStatus[id-1] == "not_playing" &&
                                <div className="d-flex gap-2">
                                    <button onClick={() => handleClick(i)} value="playing" className="btn">Playing</button>
                                    <button onClick={() => handleClick(i)} value="not_playing" className="btn btn-danger">Not Playing</button>
                                    <button onClick={() => handleClick(i)} value="undecided" className="btn">Undecided</button>
                                </div>
                            }
                            {player.gameStatus[id-1] == "undecided" &&
                                <div className="d-flex gap-2">
                                    <button onClick={() => handleClick(i)} value="playing" className="btn">Playing</button>
                                    <button onClick={() => handleClick(i)} value="not_playing" className="btn">Not Playing</button>
                                    <button onClick={() => handleClick(i)} value="undecided" className="btn btn-warning">Undecided</button>
                                </div>
                            }
                            
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
            
    )
}
    
export default GameList;