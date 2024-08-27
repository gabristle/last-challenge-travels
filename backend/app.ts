import express from 'express'
import bodyParser from 'body-parser'
import sequelize from './src/database/db-config'
import categoryRouter from './src/routes/category'

const app = express()
app.use(bodyParser.json())

app.use('/category', categoryRouter)

const PORT = 3000

sequelize.sync().then( () => {
    app.listen(PORT, () => {
      console.info(`Server running on http://localhost:${PORT}`)
    })
})