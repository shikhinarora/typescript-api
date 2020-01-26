const User = require('../models/user');

const { body, validationResult } = require('express-validator');


const createUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    console.log('errors :', errors);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    // const { username, password, firstName, lastName, mobile, isActive } = req.body
    
    // const user = await User.create({
    //   username,
    //   password,
    //   firstName,
    //   lastName,
    //   mobile,
    //   isActive
    // })

    // res.json(user)
    res.json({
      message: "Success!"
    })
  } catch(err) {
    return next(err)
  }
};

const validateUser = () => {
  return [ 
    body('username', 'username doesn\'t exists').exists().isEmail(),
    body('password', 'password doesn\'t exists').exists(),
    body('firstName', 'firstName doesn\'t exists').exists(),
    body('lastName', 'lastName doesn\'t exists').exists(),
    body('mobile').exists().isInt(),
    body('isActive').exists().isBoolean(),
  ]
};

module.exports = {
  validateUser,
  createUser
};

