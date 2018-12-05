const express = require('express');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const User = require('../models/userschema');
const db = require('../database/db');

const verifyToken = require('../auth/verifyToken');

let apiRoutes = express.Router();

apiRoutes.post('/login', async (req, res) => {
    const { document, password } = req.body;

    let user;
    try {
        user =  await User.findOne({ document }).select('+password');
    } catch(err) {
        return send.status(400).send({ message: 'Error while retrieving data', error: err });
    }

    if (!user)
        return res.status(400).send({ error: 'Document not found' });

    try {
        if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({ error: 'Password Invalid' });
    } catch(err) {
        return send.status(400).send({ message: 'Error while retrieving data', error: err });
    }

    const userId = { id: user.id };
    const token = jwt.sign(userId, process.env.JWT_SECRET, { expiresIn: 600 });
    
    res.send({ success: true, message: 'Login Accepted', token: token });
});

apiRoutes.put('/update', verifyToken, async (req, res) => {
    const { phone, email, password, newPassword, id } = req.body;
    let user;
    try {
        user = await User.findById(id).select('+password');
    } catch (err) {
        return res.status(400).send({ message: 'Error while retrieving data', error: err });
    } 
    
    if(!user)
        return res.status(400).send({ error: 'User not found' });

    try {
        if(!await bcrypt.compare(password, user.password))
            return res.status(400).send({ message: 'Senha anterior inválida' });
    } catch (err) {
        return res.status(400).send({ message: 'Error while retrieving data', error: err });
    }

    const newData = { phone, email, password: newPassword };

    /* 
    * Verifica os dados passados na requisição com os dados guardados do usuário,
    * se os dados forem iguais não há necessidade de atualizá-los 
    */
    if (user.phone === phone)
        delete newData.phone;

    if (user.email === email)
        delete newData.email;

    // Verifica se há algum valor em newData que realmente esteja diferente dos valores passados na requisição
    let noDataToUpdate = Object.keys(newData).every(function (prop) {
        return newData[prop];
    });

    if(!noDataToUpdate) {
        delete user.password;
        return res.status(400).send({ message: 'All data is up to date', user: user});
    } 

    let query = User.findById(id, { new: true, runValidators: true }, function(err, doc){
        if (err) {
            console.log('Error while updating data: 123', err);
            return res.status(400).send({ message: 'Error while updating data 123', error: err });
        }

        doc.set(newData);
        doc.save();
    });

    query = User.findById(id, function(err, doc){
        if(err) {
            console.log('Error while updating data: 124', err);
            return res.status(400).send({ message: 'Error while updating data 124', error: err });
        }

        let user = doc;
        console.log('UpdatedUser :', user);
        delete user.password;
        res.send({ user });
    });
});

module.exports = apiRoutes;