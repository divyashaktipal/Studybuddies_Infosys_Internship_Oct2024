import express from 'express';
import { createDeck, getDecks, getDeckById, updateDeck, deleteDeck,getPublicDecks,RemoveAllDecks,countDecks } from '../controllers/deckController.js';
import { userAuthMiddleware, adminAuthMiddleware } from '../middlewares/auth.js';



const router = express.Router();

/**
 * @route GET /api/decks
 * @desc Get all decks of user
 * @access Public
 */
router.get('/',userAuthMiddleware, getDecks);

/**
 * @route GET /api/decks/exploredeck
 * @desc Get all decks for explorepage
 * @access Public
 */


router.get('/exploredeck',userAuthMiddleware,getPublicDecks);


router.get("/alldecks",userAuthMiddleware,countDecks)

/**
 * @route GET /api/decks/:id
 * @desc Get a single deck by its ID
 * @access Public
 */
router.get('/:id',userAuthMiddleware, getDeckById);

/**
 * @route POST /api/decks
 * @desc Create a new deck
 * @access Private (User Auth)
 */
router.post('/', userAuthMiddleware, createDeck);

/**
 * @route PUT /api/decks/:id
 * @desc Update a deck by its ID
 * @access Private (User Auth)
 */
router.put('/:id', userAuthMiddleware, updateDeck);

/**
 * @route DELETE /api/decks/:id
 * @desc Delete a deck by its ID
 * @access Private (Admin Auth)
 */
router.delete('/:id', userAuthMiddleware, deleteDeck);
/**
 * @route DELETE /api/decks/removealldecks
 * @desc Delete all the user decks 
 * @access  user can do it
 */

router.delete("/removealldecks",userAuthMiddleware,RemoveAllDecks);









export default router;

