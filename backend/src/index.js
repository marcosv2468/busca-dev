const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')
const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express()
const server = http.Server(app)
const PORTA = 5000

setupWebsocket(server)

// Conectando com o MongoDB
mongoose.connect('mongodb+srv://marcosv:marcosv@cluster0-pvzeb.mongodb.net/buscadev?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

app.use(cors())
// Especificando JSON para o Express
app.use(express.json())
app.use(routes)

server.listen(PORTA,
	() => console.log(`Servidor rodando na porta ${PORTA}`
))
