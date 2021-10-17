import express from "express"

import {getLessons, postLessons} from './route'
import {getLessonsByHash, updateLessonsByHashByHash, removeLessonsByHash} from "./hash"
import {addVideo} from './hash/videos'
import {getVideoByHash, removeVideoByHash} from './hash/videos/hash'
import {addKeynote} from './hash/keynotes'
import {getKeynoteByHash, removeKeynoteByHash} from './hash/keynotes/hash'

import {authenticate} from '../../utils'

const router = express.Router()

router.get('/', getLessons)
router.post('/', [authenticate],postLessons)

router.get('/:lessonHash', [authenticate], getLessonsByHash)
router.put('/:lessonHash', [authenticate], updateLessonsByHashByHash)
router.delete('/:lessonHash', [authenticate], removeLessonsByHash)

router.post('/:lessonHash/videos', [authenticate], addVideo)
router.post('/:lessonHash/keynotes', [authenticate], addKeynote)

router.get('/:lessonHash/videos/:videoHash', [authenticate], getVideoByHash)
router.delete('/:lessonHash/videos/:videoHash', [authenticate], removeVideoByHash)

router.get('/:lessonHash/keynotes/:keynoteHash', [authenticate], getKeynoteByHash)
router.delete('/:lessonHash/keynotes/:keynoteHash', [authenticate], removeKeynoteByHash)

export {router as lessons}
