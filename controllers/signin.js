const handleSignin = (req, res, bycript, db) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json('incorrect form submission')
    }
    db.select('email', 'hash').from('login')
        .where('email', '=', email)
        .then(data => {
            const isValid = bycript.compareSync(password, data[0].hash)
            if (isValid) {
                return db.select('*').from('users')
                    .where('email', '=', email)
                    .then(user => {
                        res.json(user[0])
                    })
                    .catch(err => res.status(400).json('unable to get user'))
            } else {
                res.status(400).json('invalid credentials')
            }
        })
        .catch(err => res.status(400).json('invalid credentials'))
}

module.exports = {
    handleSignin
}