const express = require(express);
const router = express.Router();

router.use('/', function(req, res)
 {
});

router.get('/', function(req, res) {
    res.send('App está online!')
});

module.exports = router;