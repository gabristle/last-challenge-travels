import express from 'express'
import bodyParser from 'body-parser'
import sequelize from './src/database/db-config'

const app = express()
app.use(bodyParser.json())

const PORT = 3000

sequelize.sync().then( () => {
    app.listen(PORT, () => {
      console.info(`Server running on http://localhost:${PORT}`)
    })
}).catch((error) => {
    console.error(error)
})