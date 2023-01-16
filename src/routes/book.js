const express = require('express');

const router = express.Router();

const bookController = require('../controllers/book');

router
    .route('/')
    .get(bookController.bookGetAll)
    .post(bookController.bookCreate);

router
    .route('/:id')
    .get(bookController.bookGetById)
    .patch(bookController.bookUpdate)
    .delete(bookController.bookDelete);

module.exports = router;
