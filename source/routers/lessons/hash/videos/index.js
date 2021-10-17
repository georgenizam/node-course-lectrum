export const addVideo = (req, res) => {
    try {
        const data = {}
        res.status(201).json({data})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}