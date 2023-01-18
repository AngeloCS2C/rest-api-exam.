const express = require('express');
const router = express.Router();

const Person = require('../models/person');

router.get('/', async (req, res) => {
    const people = await Person.find();
    res.json(people);
});

router.post('/', async (req, res) => {
    const person = new Person(req.body);
    await person.save();
    res.json(person);
});

router.put('/:id', async (req, res) => {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body);
    res.json(person);
});

router.delete('/:id', async (req, res) => {
    const person = await Person.findByIdAndDelete(req.params.id);
    res.json(person);
});

module.exports = router;
