import express from "express";
const User = require('../models/index').User
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users)
});

export default router;
