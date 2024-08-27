import express from 'express'
import bodyParser from 'body-parser'
import sequelize from './src/database/db-config'
import categoryRouter from './src/routes/category'
import destinationRouter from './src/routes/destination'
import tourRouter from './src/routes/tour'
import reviewRouter from './src/routes/review'

const app = express()
app.use(bodyParser.json())

app.use('/category', categoryRouter)
app.use('/destination', destinationRouter)
app.use('/tour', tourRouter)
app.use('/review', reviewRouter)

const PORT = 3000

sequelize.sync({force: true}).then( () => {
    app.listen(PORT, () => {
      console.info(`Server running on http://localhost:${PORT}`)
    })
})