import mongoose from 'mongoose'
import dg from 'debug'

import {getConnectionString} from '../utils/env'

const debug = dg('db')

const mongooseOptions = {
    promiseLibrary:    global.Promise,
    poolSize:          50,
    keepAlive:         30000,
    connectTimeoutMS:  5000,
    // reconnectTries:    Number.MAX_SAFE_INTEGER,
    // reconnectInterval: 5000,
    useNewUrlParser:   true,
    useFindAndModify:  false,
    useCreateIndex:    true,
    useUnifiedTopology: true
}

const connection = mongoose.connect(getConnectionString(), mongooseOptions)

connection
    .then(() => {
        debug('DB connected')
    })
    .catch(err => {
        debug(`DB connection error: ${err.message}`)
    })

export default connection