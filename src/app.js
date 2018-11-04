const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'site/build')))

const server = app.listen(process.env.PORT || '4000', () => {
	const address = server.address()
	console.log(
		'Now listening on %s:%s in %s mode',
		address.address,
		address.port,
		process.env.NODE_ENV || 'development'
	)
})

app.get('/ping', (req, res) => {
	res.end('pong')
})

app.use('/twitter', require('./routes/twitter.routes'))
app.use('/', require('./routes/xcom.routes'))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'site/build', 'index.html'))
})
