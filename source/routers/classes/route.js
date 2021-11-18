import {Lessons} from "../../controllers"

export const getClasses = (req, res) => {
  try {
    res.status(200).json({ data: [] })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const postClasses = async (req, res) => {
  try {
    const model = new Lessons(req.body)
    const {hash} = await model.create()

    res.status(201).json({ hash })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}