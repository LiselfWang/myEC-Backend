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
  if(req.method === "OPTIONS"){
    res.sendStatus(200);
    res.end();
    return;
  }

  if( !checkToken(req.headers[TOKEN_KEY])) {
    res.sendStatus(403);
    res.end();
    return;
  }
  
  next();
}