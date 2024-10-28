const loadusrlist = require('../cache/userlist');

exports.userlist = async (req, res, next) => {
    try {
      res.send(loadusrlist);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };