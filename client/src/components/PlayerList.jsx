import DeleteButton from './DeleteButton'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Rodal from 'rodal'
import 'rodal/lib/rodal.css';

const PlayerList = (props) => {
    const {players, removeFromDom} = props

    const [selected, setSelected] = React.useState([])
    const [visible, setVisible] = React.useState(false)

    const show = (index) => {
        const selectedPlayer = players.filter((player, i) => index === i)
        setSelected(selectedPlayer[0])
        setVisible(true)
    }

    const hide = () => {
        setVisible(false)
    }

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {players.map( (player, i) => {
                    return(
                        <tr key={i}>
                            <td className="align-middle">{player.name}</td>
                            <td className="align-middle">{player.position}</td>
                            <td>
                                <Button onClick={()=> show(i)}>DELETE</Button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            {selected &&
            <Rodal visible={visible} onClose={hide}>
                <div className="d-flex align-items-center h-100 flex-column justify-content-center text-center">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Are you sure you want to delete {selected.name}?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} className="d-flex gap-1">
                        <DeleteButton 
                            playerId={selected._id} 
                            successCallback={()=>{
                                removeFromDom(selected._id)
                                hide()
                            }} 
                        />
                        <button className="btn btn-info" onClick={hide}>Cancel</button>
                    </Typography>
                </div>
            </Rodal>
            }
        </>
    )
}
    
export default PlayerList;

