import Ajv from 'ajv'

import {ValidationError} from "../utils"

export const validator = (schema) => (req, res, next) => {
    const ajv = new Ajv({allErrors: true})
    const validate = ajv.compile(schema)

    const valid = validate(req.body)

    if (valid) {
        return next()
    }

    const errorsMessage = validate.errors.map(({message}) => message).join(', ')
    const body = JSON.stringify(req.body, null, 2)
    const err = new ValidationError(errorsMessage + '\n' + body, 400)
    // res.status(400).json({message: errorsMessage})
    next(err)
}