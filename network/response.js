exports.success = (req, res, message, status) => {
  let statusCode = status || 200;
  let statusMessage = message || 'OK';
  res.status(statusCode).json({
    error: false,
    status: status,
    body: statusMessage,
  });
};

exports.error = (req, res, message, status) => {
  let statusCode = status || 500;
  let statusMessage = message || 'Internal Server Error';
  res.status(statusCode).json({
    error: false,
    status: status,
    body: statusMessage,
  });
};
