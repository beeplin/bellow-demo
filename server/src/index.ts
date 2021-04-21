import cors from 'cors'
import express, { Request, Response } from 'express'
import path from 'path'
import telecall from 'telecall/lib/express'

export interface Context {
  req: Request
  res: Response
}

const IS_PROD = require.main?.path.endsWith('dist')

const app = express()

app.use(cors())
app.use(express.json())

app.use(
  telecall.path,
  telecall.middleware({
    convertResolverPath: (original) =>
      IS_PROD ? original.replace(/^\/src\/(.*?)\.ts$/, '/dist/$1.js') : original,
  }),
)

app.use(express.static(path.join(__dirname, '../../www/dist')))

const { port } = telecall

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`)
})
