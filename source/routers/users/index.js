import express from "express"

import {getUsers, postUsers} from "./route"
import {getUserByHash, updateByHash, removeByHash} from "./hash"

import {limiter, validator, authenticate} from "../../utils"

import {createUser} from "../../schemas"

const router = express.Router()

router.get('/', [authenticate, limiter(2, 1000 * 60)], getUsers)
router.post('/', [validator(createUser)], postUsers)

router.get('/:userHash', [authenticate], getUserByHash)
router.put('/:userHash', [authenticate], updateByHash)
router.delete('/:userHash', [authenticate], removeByHash)


export {router as users}