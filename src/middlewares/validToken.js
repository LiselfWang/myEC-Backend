const TOKEN_KEY = 'token';

export default (req, res, next) => {
  // if(!req.headers[TOKEN_KEY]) {
  //   const err = new Error('Forbidden');
  //   err.statusCode = 403;
  //   next(err);
  //   return;
  // }

  next();
}