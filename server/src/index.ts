import cors from 'cors'
import express, { Request, Response } from 'express'
import path from 'path'
import telecall from 'telecall/lib/express-middleware'

export interface Context {
  req: Request
  res: Response
}

const app = express()

app.use(cors())
app.use(express.json())
app.use(telecall(app))
app.use(express.static(path.join(__dirname, '../../www/dist')))

const port = app.get('port')

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
