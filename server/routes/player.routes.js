const PlayerController = require('../controllers/player.controller');
module.exports = function(app){
    app.get('/api', PlayerController.index);
    app.get('/api/players', PlayerController.findAllPlayers);
    app.get('/api/players/:id', PlayerController.getPlayer)
    app.post('/api/players', PlayerController.createPlayer);
    app.put('/api/players/:id', PlayerController.updatePlayer);
    app.delete('/api/players/:id', PlayerController.deletePlayer)
}