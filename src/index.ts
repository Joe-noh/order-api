import express from 'express'

const app = express()

app.use(express.json())

app.get('/orders/:id', (req, res) => {
  res.json({
    result: 'OK'
  })
})

app.listen(3030, () => {
  console.log('Ready at: http://localhost:3030')
})
