var Util = new Object();

Util.formatError = function (message) {
  var error = {
      message,
      variant: 'error'
  }
  return error;
}

Util.resultError400 = (res, error) => {
  return res.status(400).json({
      success: false,
      error,        
  });
}

Util.resultWarning400 = (res, error) => {
  return res.status(400).json({
      success: false,
      error,        
  });
}

Util.resultSuccess = (res, data) => {
  return res.status(200).json({
      success: true,
      result: {
          message: "Operação realizada com sucesso.",
          variant: 'success'
      },
      data
  });
}

Util.isEmpty = (value) => {
    return value === undefined ||
      value === null ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (typeof value === 'string' && value.trim().length === 0)
}

module.exports = Util;