exports.myMiddleware = (req, res, next) => {
  req.name = 'Steph';
  if(req.name === 'Steph') {
    throw Error('No. There is only one Steph.');
  }
  next();
}

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
}