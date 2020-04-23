/** Load input validation */
const validateAddress = require('../validation/address')
const util = require('../utils/general')

/** Models */
const User = require('../models/User');
const Address = require('../models/Address');

class AddressService {

    /**
     * Realiza a gravação dos dados do endereço
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async create (req, res, next) { 
        try {             
            const { error, isValid } = validateAddress.newAddress(req.body);
            
            if (!isValid) {
                return util.resultError400(res, error);
            }

            const newAddress = new Address(req.body);
            
            await newAddress.save();

            return util.resultSuccess(res, newAddress);            
        } catch (err) {
            util.resultError400(res, 'Ocorreu um erro desconhecido, tente novamente ou contate o suporte.');
            next(err);
        }
    }

    /**
     * Realiza a alteração dos dados do endereço
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async update (req, res, next) {
        try {             
            const { error, isValid } = validateAddress.newAddress(req.body);
            
            if (!isValid) {
                return util.resultError400(res, error);
            }

            if (!req.params.addressId) {
                return util.resultError400(res, 'Id não fornecido!');
            }

            const newAddress = await Address.findByIdAndUpdate(req.params.addressId, req.body, { new: true });

            if (util.isEmpty(newAddress)) {
                return util.resultError400(res, 'Endereço não encontrado!');
            }
            
            return util.resultSuccess(res, newAddress);
        } catch (err) {
            util.resultError400(res, 'Ocorreu um erro desconhecido, tente novamente ou contate o suporte.');
            next(err);
        }
    }

    /**
     * Realiza a exclusão de um endereço
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async remove (req, res, next) {     
        try {             
            if (!req.params.addressId) {
                return util.resultError400(res, 'Id não fornecido!');
            }

            const newAddress = await Address.findByIdAndRemove(req.params.addressId);

            if (util.isEmpty(newAddress)) {
                return util.resultError400(res, 'Endereço não encontrado!');
            }
            
            return util.resultSuccess(res);          
        } catch (err) {
            util.resultError400(res, 'Ocorreu um erro desconhecido, tente novamente ou contate o suporte.');
            next(err);
        }
    }

    /**
     * Retorna todos os endereços
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async getAll (req, res, next) {     
        try {  
            const adresses = await Address.find();
                
            return util.resultSuccess(res, adresses);      
        } catch (err) {
            util.resultError400(res, 'Ocorreu um erro desconhecido, tente novamente ou contate o suporte.');
            next(err);
        }
    }

    /**
     * Retorna um endereço pelo id
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async get (req, res, next) {     
        try {  
            if (!req.params.addressId) {
                return util.resultError400(res, 'Id não fornecido!');
            }

            const address = await Address.findById(req.params.addressId);
            
            return util.resultSuccess(res, address);      
        } catch (err) {
            util.resultError400(res, 'Ocorreu um erro desconhecido, tente novamente ou contate o suporte.');
            next(err);
        }
    }
}

module.exports = new AddressService()