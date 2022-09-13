import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlayerForm = (props) => {
    const {initialName, initialPosition, initialStatus, onSubmitProp} = props;
    const [name, setName] = useState(initialName); 
    const [position, setPosition] = useState(initialPosition)
    const [gameStatus, setGameStatus] = useState(initialStatus)

    const navigate = useNavigate()

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, position, gameStatus})
    }
    
    return (
        <>
            <form onSubmit={onSubmitHandler} className="pb-3">
                <p>
                    <label>Name (Required):</label><br/>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </p>
                <p>
                    <label>Position:</label><br/>
                    <input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/>
                </p>
                <div className="d-flex gap-2">
                    {
                        name.length < 2 ?
                        <button type="submit" className="btn btn-primary" disabled>Submit</button> :
                        <button type="submit" className="btn btn-primary">Submit</button>
                    }
                    <button 
                        onClick={()=>{navigate('/players/list');}}
                        className="btn btn-warning"
                    >Cancel</button>
                </div>
            </form>
        </>
    )
}

export default PlayerForm