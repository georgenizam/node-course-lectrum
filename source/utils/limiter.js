import rateLimit from 'express-rate-limit'

export const limiter = (numReq, resetIn) => rateLimit({
    windowMs: resetIn,
    max: numReq,
    headers: false
})