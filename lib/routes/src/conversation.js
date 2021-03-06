const router = require('express').Router();
const ConversationController = require('../../controllers/conversation/index');

/**
 * GET    /find-all
 * GET    /find-by-id
 * POST   /add
 * POST   /delete
 */

router.get('/find-all', ConversationController.findAll);
router.get('/find-by-id/:_id', ConversationController.findById);
router.post('/add', ConversationController.add);
router.post('/delete', ConversationController.delete);
module.exports = router;
