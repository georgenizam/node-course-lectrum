import express from "express"

import {login, logout} from './route'
import {limiter, authenticate} from '../../utils'

const router = express.Router()

router.post('/login', [limiter(5, 1000 * 60)], login)
router.post('/logout', [authenticate, limiter(5, 1000 * 60)], logout)

export {router as auth}