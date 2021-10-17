import {format, transports, createLogger} from "winston"
import path from 'path'

const {combine, timestamp, printf, label} = format

const filename = path.resolve(path.join('logs', 'not_found_errors.log'))
const logFormat = printf(({message, timestamp}) => `${timestamp} ${message}`)

export const notFoundLogger = createLogger({
    level: 'error',
    format: combine(timestamp(), logFormat),
    transports: [new transports.File({filename, level: 'error'})]
})