export const getClasses = (req, res) => {
  try {
    res.status(200).json({ data: [] })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const postClasses = (req, res) => {
  try {
    const classTmp = {
      "title": "Backend",
      "description": "Backend Online Course",
      "order": 2,
      "duration": {
        "started": "2019-06-19T07:44:06.353Z",
        "closed": "2019-06-19T07:44:06.353Z"
      }
    }
    res.status(201).json({ data: classTmp })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}