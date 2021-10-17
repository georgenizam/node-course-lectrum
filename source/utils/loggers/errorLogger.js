import {createLogger, transports, format} from "winston"
import path from 'path'

const {combine, timestamp, printf} = format
const filename = path.resolve(path.join('logs', 'errors.log'))
const logFormat = printf(({message, timestamp}) => `${timestamp} ${message}`)

export const errorLogger = createLogger({
    level: 'error',
    format: combine(timestamp(), logFormat),
    transports: [new transports.File({ filename, level: 'error' })]
})