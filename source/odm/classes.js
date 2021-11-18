import mongoose from "mongoose"
import v4 from 'uuid/v4'

import {users, lessons} from "./"

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        unique: true,
        required: true,
        default: () => v4()
    },
    students: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: users
            },
            status: {
                type: String,
                enum: [ 'standard', 'select', 'premium' ]
            },
            expelled: Boolean,
            notes: String
        }
    ],
    lessons: [
        {
            lesson: {
                type: mongoose.Schema.Types.ObjectId,
                ref: lessons
            },
            scheduled: Date
        }
    ],
    duration: {
        started: {
            type: Date,
            required: true
        },
        closed: {
            type: Date,
            required: true
        }
    },
    order: Number,
    created: {
        type: Date,
        default: () => new Date()
    },
    modified: Date
})

const classes = mongoose.model('classes', schema)

export {classes}