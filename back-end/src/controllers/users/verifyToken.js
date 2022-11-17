const jwt = require('jsonwebtoken')
const express = require('express')
require('dotenv').config()

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token==null)
        return res.status(401).send("Token requerido");
    jwt.verify(token, process.env.TOKEN_KEY, (err, user)=>{
        if(err) return res.status(403).send("Token invalido");
        
        req.user = user;
        next();
    });
}

module.exports = verifyToken