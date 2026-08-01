exports.isFaculty = (req, res, next) => {

  const role =
    req.headers.role;

  if (
    role !== "faculty" &&
    role !== "admin"
  ) {
    return res.status(403).json({
      message:
        "Faculty Access Only",
    });
  }

  next();

};

exports.isAdmin = (req, res, next) => {

  const role =
    req.headers.role;

  if (
    role !== "admin"
  ) {
    return res.status(403).json({
      message:
        "Admin Access Only",
    });
  }

  next();

};