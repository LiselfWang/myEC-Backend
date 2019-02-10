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
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "token");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

  if(req.method === "OPTIONS"){
    res.statusCode = 200;
    res.end();
    return;
  }

  if( !checkToken(req.headers[TOKEN_KEY])) {
    const err = new Error('Forbidden');
    err.statusCode = 403;
    next(err);
    return;
  }
  
  next();
}