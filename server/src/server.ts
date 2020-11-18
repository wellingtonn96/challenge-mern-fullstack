import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
  return response.json({ message: 'hello world'})
})

app.listen(3333, () => console.log('Web server running on port 3333'))