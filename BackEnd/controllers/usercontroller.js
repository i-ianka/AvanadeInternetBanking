const express = require('express');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const bcrypt = require('bcrypt');

const User = require('../models/userschema');
const verifyToken = require('../auth/verifyToken');

let apiRoutes = express.Router();

apiRoutes.post('/login', async (req, res) => {
    const { document, password } = req.body;

    let user;
    try {
        user =  await User.findOne({ document }).select('+password');
    } catch(err) {
        return send.status(400).send({ success: false, message: 'Error while retrieving data - Code: 0001', error: err });
    }

    if (!user)
        return res.status(400).send({ success: false, error: 'Document not found - Code: 0002' });

    try {
        if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({ success: false, error: 'Password Invalid - Code: 0003' });
    } catch(err) {
        return send.status(400).send({ success: false, message: 'Error while retrieving data - Code: 0004', error: err });
    }

    const userId = { id: user.id };
    const token = jwt.sign(userId, process.env.JWT_SECRET, { expiresIn: 600 });
    
    res.send({ success: true, token: token });
});

apiRoutes.put('/update', verifyToken, async (req, res) => {
    const { phone, email, password, newPassword, id } = req.body;
    let user;
    try {
        user = await User.findById(id).select('+password');
    } catch (err) {
        return res.status(400).send({ success: false, message: 'Error while retrieving data - Code: 0005', error: err });
    } 
    
    if(!user)
        return res.status(400).send({ success: false, error: 'User not found - Code: 0006' });

    try {
        if(!await bcrypt.compare(password, user.password))
            return res.status(400).send({ success: false, message: 'Senha anterior inválida - Code: 0007' });
    } catch (err) {
        return res.status(400).send({ success: false, message: 'Error while retrieving data - Code: 0008', error: err });
    }

    const newData = { phone, email, password: newPassword };

    /* 
    * Verifica os dados passados na requisição com os dados guardados do usuário,
    * se os dados forem iguais não há necessidade de atualizá-los 
    */

    function deleteProperty(propName, obj) {
        let newObj = { ... obj };
        delete newObj[propName];
        return newObj;
    }

    if (user.phone === phone)
        newData = deleteProperty('phone', newData);

    if (user.email === email)
        newData = deleteProperty('email', newData);

    // Verifica se há algum valor em newData que realmente esteja diferente dos valores passados na requisição
    let noDataToUpdate = Object.keys(newData).every(function (prop) {
        return newData[prop];
    });

    if(!noDataToUpdate) 
        return res.status(400).send({ success: false, message: 'All data is up to date - Code: 0009' });

    let query = User.findById(id, { new: true, runValidators: true }, function(err, doc){
        if (err) {
            console.log('Error while updating data - Code: 0010', err);
            return res.status(400).send({ success: false, message: 'Error while updating data - Code: 0011', error: err });
        }

        doc.set(newData);
        doc.save();
        res.send({ success: true, message: 'User Updated with success - Code: 0012' })
    });

    // query = User.findById(id, function(err, doc){
    //     if(err) {
    //         console.log('Error while updating data: 124', err);
    //         return res.status(400).send({ message: 'Error while updating data - Code: 0012', error: err });
    //     }

    //     let user = doc;
    //     console.log('UpdatedUser :', user);
    //     delete user.password;
    //     res.send({ user });
    // });
});

apiRoutes.get('/user/:doc', verifyToken, async (req, res) => {
    let document = req.params.doc;
    console.log('Passei aqui - Code: 1001');
    let user;
    try {
        user = await User.findOne({ document }).select('-password');
        // console.log('Documento informado: ', req.params.doc);
        // console.log('Usuario encontrado: ', user);
    } catch (err) {
        return res.status(400).send({ success: false, message: 'Error while retrieving user - Code: 0013', error: err });
    }

    if(!user) return res.status(400).send({ success: false, message: 'User not found - Code: 0014' });

    return res.status(400).send({ success: true, message: 'User founded - Code: 0015', user: user });
});

module.exports = apiRoutes;