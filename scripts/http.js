const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
    console.log('request receveid:', req.url)
    res.setHeader('Content-Type', 'text/html; charset=utf8')
    if (req.url === '/') {
        res.statusCode = 200
        res.end('<h1>Homeàaa</h1>')
    } else if (req.url === '/hola') {
        res.statusCode = 200
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end(`Error: ${err}`)
            } else {
                res.end(data)
            }
        })
    } else {
        res.statusCode = 404
        res.end('Not found')
    }
}

const server = http.createServer(processRequest)
server.listen(desiredPort, () => {
    console.log(`Servidor en el puerto http://localhost:${desiredPort}`)
})
