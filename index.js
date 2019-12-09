'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.DB, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conexión a la base de datos establecida...')

  app.listen(config.PORT, () => {
    console.log(`API corriendo en http://localhost:${config.PORT}`)
  })
})
mongoose.Promise = global.Promise
