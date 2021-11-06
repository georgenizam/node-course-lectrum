// Core
import express from 'express'
import bodyParser from "body-parser"
import session from 'express-session'

import {logger, errorLogger, notFoundLogger, validationLogger, NotFoundError, sessionOptions} from './utils'
import * as routers from './routers'

const app = express()

app.use(bodyParser.json({limit: '10kb'}))
app.use(session(sessionOptions))

if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
        let body = null;

        if (req.method !== 'GET') {
            body = JSON.stringify(req.body, null, 2)
        }

        logger.debug(`${req.method} ${body ? `\n${body}` : ''}`)
        next();
    })
}

app.use('/', routers.auth)
app.use('/users', routers.users)
app.use('/classes', routers.classes)
app.use('/lessons', routers.lessons)

app.use('*', (req, res, next) => {
    // console.log(req)
    const err = new NotFoundError(`Can not find right route for method ${req.method} and path ${req.originalUrl}`)
    next(err)
})

if (process.env.NODE_ENV !== 'test') {
    app.use((err, req, res, next) => {
        const {name, message, statusCode} = err
        const errorMessage = `${name}: ${message}`

        switch (name) {
            case 'NotFoundError':
                notFoundLogger.error(errorMessage)
                break
            case 'ValidationError':
                validationLogger.error(errorMessage)
                break
            default:
                errorLogger.error(errorMessage)
                break
        }
        const status = statusCode || 500
        res.status(status).json({message: message})
    })
}

export { app }
