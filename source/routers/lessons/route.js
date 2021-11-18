import {Lessons} from "../../controllers"

export const getLessons = (req, res) => {
    try {
        const data = []
        res.status(200).json({data})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

export const postLessons = async (req, res) => {
    try {
        const model = new Lessons(req.body)
        const data = await model.create()

        console.log('data = ', data)

        res.status(201).json({hash: data.hash})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}