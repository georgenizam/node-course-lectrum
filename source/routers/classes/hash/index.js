export const getClassesByHash = (req, res) => {
    try {
        const data = {}
        res.status(200).json({data})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

export const updateClassesByHash = (req, res) => {
    try {
        const data = {
            "title": "Backend",
            "description": "Backend Online Course",
            "order": 2,
            "duration": {
                "started": "2019-06-19T07:44:06.353Z",
                "closed": "2019-06-19T07:44:06.353Z"
            }
        }
        res.status(201).json({data})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

export const removeClassesByHash = (req, res) => {
    try {
        res.sendStatus(204)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}