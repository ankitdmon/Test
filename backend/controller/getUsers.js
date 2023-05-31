const User = require("../models/User");
exports.getUser = async (req, res) => {
	try {
		let userData = await User.find({});
		res.json({ success: true, data: userData });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};

exports.getUserById = async (req, res) => {
	try {
		let userData = await User.findOne({_id:req.params._id});
		res.json({ success: true, data: userData });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};

