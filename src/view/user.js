const User = require('../model/user')


function check_fields(fields, allowNull=false){
    
    if ('password' in fields || allowNull){
        const status = User.checkPassword(fields['password'])
    }

}

async function createUser(req, res){
    const fields = req.body.fields;

    if(!check_fields(fields)){
        return {'status': false, 'msg': ''}
    }

    const user = User.build({ 
        email: fields['email'],
        nickName: fields['nickName'],
        password: hash.digest('hex'),
    })

    await user.save()
    return {'status': true, 'id': user.id}
}

async function deleteUser(req, res){
    const body = req.body;

    ret = {}
    const user = User.findByPk(body.id)
    if (user === null) {
        ret['status'] = false
        ret['msg'] = `User ${body.email} is not found!`
    } else {
        await user.destroy();
        ret['status'] = true
    }
    
    return ret
}

async function updateUser(req, res){
    const body = req.body;

    ret = {}
    const user = User.findByPk(body.id)
    if (user === null) {
        ret['status'] = false
        ret['msg'] = `User ${body.email} is not found!`
    } else {
        const fields = body.update_fields
        for (const key in fields) {
            user[key] = fields[key]
        }
        await user.save()
    }
    
    return ret
}

module.exports = {createUser, deleteUser, updateUser}
