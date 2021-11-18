import mongoose from "mongoose"
import v4 from 'uuid/v4'

import {users, lessons} from "./"

const schema = new mongoose.Schema({
    hash: {
        type: String,
        unique: true,
        required: true,
        default: () => v4()
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
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

schema.index({order: 1}, {name: 'order'})
schema.index({title: 'text', description: 'text'})

export const classes = mongoose.model('classes', schema)

classes.createIndexes()
