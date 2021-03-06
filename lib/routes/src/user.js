const router = require('express').Router();
const UserController = require('../../controllers/user/index');

/**
 * GET    /find-all
 * GET    /find-by-id
 * POST   /add
 * POST   /delete
 */

router.get('/find-all', UserController.findAll);
router.get('/find-by-id/:_id', UserController.findById);
router.post('/add', UserController.add);
router.post('/delete', UserController.delete);
router.post('/edit/', UserController.edit)


module.exports = router;
