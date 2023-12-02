const jwt = require("jsonwebtoken");

const isAdmin = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      status: {
        code: 401,
        message: "Unauthorized",
      },
      data: null,
    });
  }

  // Verify the JWT token
  jwt.verify(token, "your-secret-key", (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: {
          code: 401,
          message: "Unauthorized",
        },
        data: null,
      });
    }

    // Assuming your JWT payload includes a field like 'isAdmin' to indicate admin status
    if (decoded.isAdmin) {
      // User is an admin, proceed to the next middleware or route handler
      next();
    } else {
      res.status(403).json({
        status: {
          code: 403,
          message: "Forbidden",
        },
        data: null,
      });
    }
  });
};

module.exports = { isAdmin };
