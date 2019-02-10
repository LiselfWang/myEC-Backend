const TOKEN_KEY = 'token';

const checkToken = (token) => {
  if(!token){
    return false;
  }

  if(token != 'LISELF') {
    return false;
  }

  return true;
}

export default (req, res, next) => {
  console.log(req)
  if(req.method !== 'OPTIONS') {
    if(!checkToken(req.headers[TOKEN_KEY])) {
      const err = new Error('Forbidden');
      err.statusCode = 403;
      next(err);
      return;
    }
  }

  next();
}