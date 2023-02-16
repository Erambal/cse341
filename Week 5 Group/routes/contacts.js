const express = require('express');
const router = express.Router();
const { createContact } = require('../validation.js');

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', createContact, contactsController.createContact);

router.put('/:id', createContact, contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;
