const router = require("express").Router();

router.get('/', async (req, res) => {
    try{ res.status(200).json({
        success: true, message: "successful"
    })} catch (err){res.status(500).json(err)}
})

module.exports = router;