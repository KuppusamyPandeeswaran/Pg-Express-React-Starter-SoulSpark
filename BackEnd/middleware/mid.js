exports.mid = async (req, res, next) => {
    try {
      res.send("Middleware");
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };