const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

/**
 * @route    GET api/auth
 * @desc     Test route
 * @access   Public
 *
 */
router.get("/", auth, async (request, response) => {
  try {
    const user = await User.findById(request.user.id).select("-password");
    response.json(user);
  } catch (err) {
    console.error(err.message);
    response.status(500).send("Internal Server Error");
  }
});

/**
 * @route    Post api/auth
 * @desc     Authenticate user & gt token
 * @access   Public
 *
 */
router.post(
  "/",
  [
    check("email", "Enter a valid email please").isEmail(),
    check("password", "Password field is required").exists()
  ],
  async (request, response) => {
    const errors = validationResult(req);

    //checks for errors
    !errors.isEmpty() && response.status(400).json({ errors: errors.array() });

    const { email, password } = request.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return response
          .status(400)
          .json({ errors: [{ msg: "Credentials are not valid" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return response
          .status(400)
          .json({ errors: [{ msg: "Credentials are not valid" }] });
      }

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecrete"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          response.json({ token });
        }
      );

    } catch (err) {
      console.error(err.message);
      response.status(500).send("Internal Server error");
    }
  }
);

module.exports = router;
