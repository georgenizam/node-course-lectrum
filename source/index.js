import { app } from './server'
import { getPort } from './utils'

//DB
import {connection} from './db'

const PORT = getPort();

app.listen(PORT, () => {
    console.log(`Server API is up on port ${PORT}`)
});
