export const login = (req, res) => {
    try {
        req.session.user = {email: 'test@gmail.com'}
        res.sendStatus(204)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

export const logout = (req, res) => {
    try {
        res.sendStatus(204)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}