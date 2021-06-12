function messageError(message, statusCode) {
  return {
    message,
    statusCode,
  };
}

function messageSuccess(data, statusCode) {
  return {
    data,
    statusCode,
  };
}

module.exports = {
  messageError,
  messageSuccess,
};
