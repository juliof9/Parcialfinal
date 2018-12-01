var mongoose = require('mongoose');
var UserModel = require('/..models/User');

let controller = {};

controller.getAll = function(req, res){
    UserModel.find({}, function(err, users){
        if(err){
            res.status(500);
            res.json({
                ok: false,
                err
            });
        }else{
            res.json({
                ok: true,
                users
            });
        }
    });
};

controller.getOne = function(req, res){
    UserModel.findOne({
        _id: req.params.id
    }, function(err, user){
        if(err){
            res.status(500);
            res.json({
                ok: false,
                err
            });
        } else{
            res.json({
                ok: true,
                user
            });
        }
    });
};

controller.update = function(req, res){
    let update = {
        username: req.body.username,
        name: req.body.name,
        lastname: req.body.lastname
    };
    UserModel.findByIdAndUpdate(req.params.id,update,function(err, old){
        if(err){
            res.status(500);
            res.json({
                ok: false,
                err
            });
        } else{
            res.json({
                ok: true,
                old,
                update
            });
        }
    });
};

controller.insert = function(req, res){
    let userNew = new UserModel({
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username
    });
    userNew.save(function(err, insertado){
        if(err){
            res.status(500);
            res.json({
                ok: false,
                err
            });
        }else{
            res.json({
                ok: true,
                insertado
            });
        }
    });
};

controller.delete = function(req, res){
    UserModel.findByIdAndremove(req.params.id, function(err, eliminado){
        if(err){
            res.status(500);
            res.json({
                ok: false,
                err
            });
        } else{
            res.json({
                ok: true,
                eliminado
            });
        }
    });
};
module.exports = controller;