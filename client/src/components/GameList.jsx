import {useParams} from 'react-router-dom'
import {useEffect} from 'react'

const GameList = (props) => {

    const {players, setGameNum} = props
    const {id} = useParams()

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
                            <div className="d-flex gap-3">
                                <p className="mb-0">Playing</p>
                                <p className="mb-0">Not Playing</p>
                                <p className="mb-0">Undecided</p>
                            </div>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
            
    )
}
    
export default GameList;