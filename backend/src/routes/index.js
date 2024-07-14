const { Router } = require('express');
const router = Router();

const user = require('../models/user');

const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) =>  res.send('Hello'))

router.post('/register', async (req, res) => {
    const { nombre, nota } = req.body;
    const newUser = new user ({nombre, nota});
    await newUser.save();
    res.status(200).json({_id: newUser._id});
})

module.exports = router;