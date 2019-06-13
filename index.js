import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Hello from './Hello'

const app = express()

app.use(express.static('dist/public'))

app.get('/', (req, res) => {
  const name = 'Marvelous Wololo'

  const component = ReactDOMServer.renderToString(<Hello name={name} />)

  const html = `
  <!doctype html>
    <html>
    <head>
      <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name })}</script>
    </head>
    <body>
    <div id="root">${component}</div>
    <script src="/home.js"></script>
  </body>
  </html>`

  res.send(html)
})

app.listen(3000)