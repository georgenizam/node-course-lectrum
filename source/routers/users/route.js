export const getUsers = (req, res) => {
  try {
      res.status(200).json({ data: [] })
  } catch (err) {
      res.status(400).json({ message: err.message })
  }
}

export const postUsers = (req, res) => {
  try {
    const userTmp = {
      "name": "John Doe",
      "email": "jdoe@example.com",
      "phone": "+380662332377",
      "password": "ab12345Cd",
      "sex": "m",
      "role": "newbie"
    }
    res.status(201).json({ data: userTmp })
  } catch (err) {
      res.status(400).json({ message: err.message })
  }
}