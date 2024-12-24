const express = require('express')
const routes = require('./routes')
const { engine } = require('express-handlebars')
const port = 3000

const app = express()

app.engine('hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(routes)

app.listen(3000, () => {
  console.log(`server run on http://localhost:${port}`)
})