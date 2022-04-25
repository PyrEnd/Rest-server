const { response, request } = require('express');

const usuariosGet = (req = require, res = response)=>{

    const query = req.query;

    res.status(200).json({
        message: 'get API - controlador'
    })
}

const usuariosPut = (req, res = response)=>{

    const id = req.params.id;

    res.status(201).json({
        message: 'put API - controlador',
        id
    })
}

const usuariosPost = (req, res = response)=>{
    const { nombre, edad } = req.body;
    
    res.status(201).json({
        message: 'post API - controlador',
        nombre
    });
}

const usuariosDelete = (req, res = response)=>{
    res.status(201).json({
        message: 'delete API - controlador'
    })
}

const usuariosPatch = (req, res = response)=>{
    res.status(201).json({
        message: 'patch API - controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}