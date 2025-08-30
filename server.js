const express = require('express')
const bycript = require('bcrypt-nodejs')
const cors = require('cors')
const knex = require('knex')

const register = require('./controllers/register.js')
const signin = require('./controllers/signin.js')
const profile = require('./controllers/profile.js')
const image = require('./controllers/image.js')

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: '',
        password: '',
        database: 'smart-brain',
    },
});

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => { res.send('connection success') })

app.post('/signin', (req, res) => { signin.handleSignin(req, res, bycript, db) })

app.post('/register', (req, res) => { register.handleRegister(req, res, bycript, db) })

app.get('/profile/:id', (req, res) => { profile.handleProfile(req, res, db) })

app.put('/image', (req, res) => { image.handleImage(req, res, db) })

app.post('/imageurl', (req, res) => { image.callAPI(req, res) })

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`App is running successfully on PORT ${PORT}!`)
})



/*
/ --> res = this is working
/signin --> POST = SUCCESS/FAIL (use POST to protect the password)
/register --> POST = user
/profile/:userID --> GET = user
/image --> PUT = user
*/