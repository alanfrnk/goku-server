const express = require('express')
const router = express.Router()

/** Service */
const UserService = require('../services/user');

// @route  POST api/user/register
// @desc   Register user
// @access Public
router.post('/register', UserService.register);

// @route  POST api/user/login
// @desc   Login user / Returning JWT token
// @access Public
router.post('/login', UserService.login);

// @route  PUT api/user/
// @desc   Update user
// @params userId
// @access Authenticated
router.put('/:userId', UserService.update);

// @route  GET api/user/
// @desc   Get users
// @access Authenticated
router.get('/', UserService.getAll);

// @route  DELETE api/user/
// @desc   Remove user
// @params userId
// @access Authenticated
router.delete('/:userId', UserService.remove);

module.exports = router