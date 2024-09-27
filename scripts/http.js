const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
    console.log('request receveid:', req.url)
    if (req.url === '/') {
        res.end('Holaaa!!! pon algo en la URL')
    } else {
        res.end(`Has puesto: '${req.url}' en la URL \n ${req}\n ${res.statusCode}`)
    }
}

const server = http.createServer(processRequest)
server.listen(desiredPort, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${desiredPort}`)
})
