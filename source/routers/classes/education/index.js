export const enroll = (req, res) => {
    try {
        const data = {
            "user": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "status": "select",
            "notes": "отличный студент"
        }
        res.status(204).json({data})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

export const expel = (req, res) => {
    try {
        const data = {
            "user": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        }
        res.status(204).json({data})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}