var mongoose = require('mongoose');
var UserModel = require('/..models/User');

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

