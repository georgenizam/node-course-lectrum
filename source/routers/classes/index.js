import express from "express"

import {getClasses, postClasses} from './route'
import {getClassesByHash, updateClassesByHash, removeClassesByHash} from "./hash"
import {expel, enroll} from "./education"
import {authenticate} from '../../utils'

const router = express.Router()

router.get('/', getClasses)
router.post('/', [authenticate], postClasses)

router.get('/:classHash', [authenticate], getClassesByHash)
router.put('/:classHash', [authenticate], updateClassesByHash)
router.delete('/:classHash', [authenticate], removeClassesByHash)

router.post('/:classHash/enroll', [authenticate], enroll)
router.post('/:classHash/expel', [authenticate], expel)

export {router as classes}
