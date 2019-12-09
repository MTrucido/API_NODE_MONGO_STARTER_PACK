'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DataSchema = new Schema({
  // ...
})

DataSchema.set('toJSON', {
  virtuals: true
})

module.exports = mongoose.model('Data', DataSchema)
