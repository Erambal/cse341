const { check } = require('express-validator');

exports.createContact = [
    check('firstName', 'First name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('favoriteColor', 'Add your favorite color').not().isEmpty(),
    check('birthday', 'Please add a valid date').not().isEmpty(),
]
