const http = require('http')

const server = http.createServer((req, res) => {
    
    let url = req.url

    if (url == '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write('<h2>Index sayfasina hosgeldiniz</h2>')
    } else if (url == '/about') {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write('<h2>Hakkinda sayfasina hosgeldiniz</h2>')
    } else if (url == '/contact') {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write('<h2>Iletisim sayfasina hosgeldiniz</h2>')
    } else {
        res.writeHead(404, {'Content-Type' : 'text/html'})
        res.write('<h2>404 Sayfa Bulunamadi</h2>')
    }

    res.end()
})

const port = 5000

server.listen(port, () => {
    console.log(`${5000} numaralı port dinleniyor`)
})