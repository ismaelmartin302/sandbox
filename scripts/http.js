const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const server = http.createServer((req, res) => {
    console.log('request receveid:', req.url)
    if (req.url === '/') {
        res.end('Holaaa!!! pon algo en la URL')
    } else {
        res.end(`Has puesto: '${req.url}' en la URL \n ${req}\n ${res}`)
    }
})
server.listen(desiredPort, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${desiredPort}`)
})
