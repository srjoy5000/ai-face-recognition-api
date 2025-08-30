const handleProfile = (req, res, db) => {
    const { id } = req.params
    db('users').where({ id })
        .then(user => {
            if (user.length) res.json(user[0])
            else res.status(404).json('not found')
        })
        .catch(err => res.status(400).json('error reaching profile'))
}

module.exports = {
    handleProfile
}