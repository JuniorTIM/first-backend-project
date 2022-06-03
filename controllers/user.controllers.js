const User = require("../Models/user.model");

module.exports.userController = {
    getUser: async (req, res) => {
        try {
            const data = await User.find();
            res.json(data);
        } catch (error) {
            res.json(err)
        }
    },
    postUser: (req,res) => {
     try {
         await User.create ({
             name: req.params.name,
         });
         res.json("Юзер создан")
     } catch (error) {
         res.json(err)
     }
    },
    patchUser: (req, res) => {
        try {
            await User.findByIdAndUpdate(req.params.id, {
            name: req.body.name
            })
         
         res.json("Юзер изменен")   
        } catch (error) {
         res.json(err);   
        }

    },
    deleteUser: async (req, res)=> {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.json("Пользователь удален")
        } catch (error) {
            res.json(err)
        }
    }

}