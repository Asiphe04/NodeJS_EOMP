require("dotenv").config();
const {sign} = require("jsonwebtoken");

module.exports = {
  // Creating a token
  createToken(user) {
    return sign(
      {
        emailAdd: user.emailAdd,
        userPass: user.userPass,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
  },

  // authenticateToken(req, res, next) {
  //   try {
  //     const token =
  //       req.cookies["realUser"] !== null
          // ? req.cookies["realUser"]
  //         : "Not registered";
  //     const isValid = null;
  //     if (token !== "Not registered") {
  //       isValid = verify(token, process.env.SECRET_KEY);
  //       if (isValid) {
  //         req.authenticated = true;
  //         next();
  //       } else {
  //         res.status(400).json({ err: "Please register" });
  //       }
  //     } else {
  //       res.status(400).json({ err: "Please register" });
  //     }
  //   } catch (e) {
  //     res.status(400).json({ err: e.message });
  //   }
  // },
};
