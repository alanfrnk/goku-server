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

Util.isEmpty = (value) => {
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
}

module.exports = Util;