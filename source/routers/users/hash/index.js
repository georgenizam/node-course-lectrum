export const getUserByHash = (req, res) => {
  try {
      const data = {}
      res.status(200).json({ data })
  } catch (err) {
      res.status(400).json({ message: err.message })
  }
}

export const updateByHash = (req, res) => {
  try {
      const data = {}
      res.status(200).json({ data })
  } catch (err) {
      res.status(400).json({ message: err.message })
  }
}

export const removeByHash = (req, res) => {
  try {
      res.sendStatus(204)
  } catch (err) {
      res.status(400).json({ message: err.message })
  }
}