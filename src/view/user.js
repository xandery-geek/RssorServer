const crypto = require('crypto')
const User = require('../model/user')


async function new_user(req, res){
    const body = req.body;

    const hash = crypto.createHash('sha1')
    hash.update(body['password']);

    const user = User.build({ 
        email: body['email'],
        nickName: body['nickName'],
        password: hash.digest('hex'),
    })

    await user.save()
    return {}
}


