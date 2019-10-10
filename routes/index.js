const express = require(express);
const postagemRoutes = require ('./postagem-routes');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('App está online!')
});

router.use('/postagem', postagemRoutes);

module.exports = router;