const express = require('express')
const router = express.Router()

/** Service */
const AddressService = require('../services/address');

// @route  GET api/address/
// @desc   Get address
// @access Authenticated
router.get('/', AddressService.getAll);

// @route  GET api/address/
// @desc   Get address
// @params addressId
// @access Authenticated
router.get('/:addressId', AddressService.get);

// @route  POST api/address/
// @desc   Register address
// @access Authenticated
router.post('/', AddressService.create);

// @route  PUT api/address/
// @desc   Update address
// @params addressId
// @access Authenticated
router.put('/:addressId', AddressService.update);

// @route  DELETE api/address/
// @desc   Remove address
// @params addressId
// @access Authenticated
router.delete('/:addressId', AddressService.remove);

module.exports = router