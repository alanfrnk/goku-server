const Validator = require('validator')
const util = require('../utils/general')

class ValidateUser {

    newUser (body) {
        let error = {}
        let data = {}
    
        if (!util.isEmpty(body)) {
            
            data.userName = !util.isEmpty(body.userName) ? body.userName : ''
            data.password = !util.isEmpty(body.password) ? body.password : ''
    
            if (!Validator.isLength(data.userName, { min: 3, max: 30 })) {
                error = util.formatError('Nome deve ter entre 3 e 30 caracteres');
            }
    
            if (!Validator.isLength(data.password, { min: 5, max: 30 })) {
                error = util.formatError('Password deve ter entre 5 e 30 caracteres');
            }
    
        } else {
            error = util.formatError('Dados não fornecidos!');
        }
    
        return {
            error,
            isValid: util.isEmpty(error)
        }
    }

    login(body) {
      let error = {}
      let data = {}
  
      if (!util.isEmpty(body)) {
          if (util.isEmpty(body.userName)) {
              error = util.formatError('Nome não fornecido!');
          }

          if (util.isEmpty(body.password)) {
              error = util.formatError('Senha não fornecida!');
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

module.exports = new ValidateUser();