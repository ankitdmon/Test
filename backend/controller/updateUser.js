const User = require("../models/User");
exports.updateUser = async(req,res)=>{
    let data = await User.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
    return res.status(200).json({message:"successfully updated", data: data})
}