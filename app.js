// Servidor básico
const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end()
})

server.listen(3002)
console.log('Escuchando en el puerto 3002')