const express = require('express');

const {
    createUser,
    getAllUser,
    fetchUserById,
    getUserById,
    updateUserById
} = require('../controllers/userController')

const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUser);
router.get('/:id', fetchUserById, getUserById);
router.patch('/:id', fetchUserById, updateUserById);

module.exports = router;
