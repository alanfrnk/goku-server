const Validator = require('validator')
const util = require('../utils/general')
    
class ValidateAddress {

    newAddress (body) {
        let error = {}
        let data = {}
    
        if (!util.isEmpty(body)) {
            
            data.zipCode  = !util.isEmpty(body.zipCode) ? body.zipCode : ''
            data.street   = !util.isEmpty(body.street) ? body.street : ''
            data.number   = !util.isEmpty(body.number) ? body.number : 0
            data.city     = !util.isEmpty(body.city) ? body.city : ''
            data.state    = !util.isEmpty(body.state) ? body.state : ''
            data.country  = !util.isEmpty(body.country) ? body.country : ''
    
            if (!Validator.isLength(data.zipCode, { min: 8, max: 8 })) {
                error = util.formatError('Cep deve ter 8 caracteres!');
            }

            if (!Validator.isLength(data.street, { min: 3, max: 60 })) {
              error = util.formatError('Rua deve ter entre 3 e 60 caracteres!');
            }

            if (!Validator.isLength(data.city, { min: 3, max: 60 })) {
              error = util.formatError('Cidade deve ter entre 3 e 60 caracteres!');
            }

            if (!Validator.isLength(data.state, { min: 3, max: 20 })) {
              error = util.formatError('Estado deve ter entre 3 e 20 caracteres!');
            }

            if (!Validator.isLength(data.country, { min: 3, max: 60 })) {
              error = util.formatError('País deve ter entre 3 e 30 caracteres!');
            }
        } else {
            error = util.formatError('Preencha todos os campos!');
        }
    
        return {
            error,
            isValid: util.isEmpty(error)
        }
    }
}

module.exports = new ValidateAddress();