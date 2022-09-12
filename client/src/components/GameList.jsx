const GameList = (props) => {
    const {players} = props
    return (

        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {players.map( (player, i) => {
                return(
                    <tr key={i}>
                        <td className="align-middle">{player.name}</td>
                        <td>
                            <p className="mb-0">ACTION</p>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
            
    )
}
    
export default GameList;