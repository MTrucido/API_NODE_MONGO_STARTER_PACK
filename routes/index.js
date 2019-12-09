'use strict'

const express = require('express')
const api = express.Router()

// Middlewares
const auth = require('../middlewares/auth')

// Controladores
const login = require('../controllers/login')
const getAllData = require('../controllers/getAllData')
const getData = require('../controllers/getData')
const newData = require('../controllers/newData')
const editData = require('../controllers/editData')
const deleteData = require('../controllers/deleteData')

// Rutas
api.post('/login', login)
api.get('/alldata/', auth, getAllData)
api.get('/data/:id', auth, getData)
api.post('/data/', auth, newData)
api.put('/data/:id', auth, editData)
api.delete('/data/:id', auth, deleteData)

module.exports = api
