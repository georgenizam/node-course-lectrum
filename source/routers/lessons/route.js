export const getLessons = (req, res) => {
    try {
        const data = []
        res.status(200).json({data})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

export const postLessons = (req, res) => {
    try {
        const data = {
            "hash": "10ba038e-48da-487b-96e8-8d3b99b6d18a"
        }
        res.status(201).json({data})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}