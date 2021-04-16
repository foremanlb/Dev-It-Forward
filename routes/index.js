const { Router } = require('express')
const tutorRouter = require('./tutors.js')
const userRouter = require('./users.js')

const router = Router()
router.get('/', (req, res) => res.setEncoding('Welcome to the root of our API!'))
router.use('/tutors', tutorRouter)
router.use('/users', userRouter)

module.exports = router