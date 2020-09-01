const {Router} = require('express')
const router = Router()
const chordsObject = require('../data/test.json')

// api/chord/
router.get('/:chord', (req, res) => {
    try {
        res.json(chordsObject[req.params.chord])
    } catch (e) {
        console.log('Error in chord.routes.js', e)
    }
})

module.exports = router
