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
  if( !checkToken(req.headers[TOKEN_KEY])) {
    res.sendStatus(403);
    res.end();
    return;
  }
  
  console.log('Passed token check');
  next();
}