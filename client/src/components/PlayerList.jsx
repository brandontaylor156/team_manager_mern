import DeleteButton from './DeleteButton'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
    
const PlayerList = (props) => {
    const {players, removeFromDom} = props

    const [open, setOpen] = React.useState(false)

    const handleOpen = (index) => {setOpen(true)}
    const handleClose = (index) => {setOpen(false)}

    return (
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
                            <Button onClick={handleOpen}>DELETE</Button>
                            <Modal
                                index={i}
                                open={open}
                                onClose={handleClose}>
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Are you sure you want to delete {player.name}?
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }} className="d-flex gap-1">
                                        <DeleteButton 
                                            playerId={player._id} 
                                            successCallback={()=>removeFromDom(player._id)} 
                                        />
                                        <button className="btn btn-info" onClick={handleClose}>Cancel</button>
                                    </Typography>
                                </Box>
                            </Modal>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
    
export default PlayerList;

