const User = require("../models/User");
exports.deleteUser = async(req,res)=>{
    await User.deleteOne({_id:req.params.id})
    return res.status(200).json({message:"successfully deleted"})
}