const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()
const PORTA = 5000

// Conectando com o MongoDB
mongoose.connect('mongodb+srv://marcosv:marcosv@cluster0-pvzeb.mongodb.net/buscadev?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

// Especificando JSON para o Express
app.use(express.json())
app.use(routes)

app.listen(PORTA,
	() => console.log(`Servidor rodando na porta ${PORTA}`
))
