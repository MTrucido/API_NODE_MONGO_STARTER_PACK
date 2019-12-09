'use strict'

// const bcrypt = require('bcryptjs')
// const User = require('../../../models/user')
// const service = require('../../../services/')

function login (req, res) {
  /*
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.status(400).json({
        message: 'Error login'
      })
    } else if (user === null) {
      return res.status(200).json({
        message: 'No existe el usuario'
      })
    } else if (user && bcrypt.compareSync(req.body.password, user.hash)) {
      return res.status(200).json({
        user: user.name,
        token: service.createToken(user)
      })
    } else {
      return res.status(200).json({
        message: 'Claves incorrectas'
      })
    }
  })
  */
}

module.exports = login
