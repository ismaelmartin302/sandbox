const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const server = http.createServer((req, res) => {
    res.end('Hola mundo')
})
server.listen(desiredPort, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${desiredPort}`)
})
