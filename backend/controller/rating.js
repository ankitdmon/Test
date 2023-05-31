const ratingModel = require('../models/ratings');
exports.rate = async (req, res) => {
    let employee_id = req.body.employee_id;
    let name = req.body.name;
    let rating_obtained = req.body.rating

    if (!ObjectId.isValid(employee_id)) {
        return res.status(200).json({
            'statusCode': 400,
            'message': 'invalid movie id',
        });
    }

    let validate_user = await ratingModel.find({
        employee_id: employee_id,
        name: name
    });

    if (validate_user && validate_user.length != 0) {
        return res.status(200).json({
            'statusCode': 400,
            'message': 'Rating Already Given'
        })
    }

    let rate_employee = new ratingModel({
        employee_id: employee_id,
        name: name,
        rating_obtained: rating_obtained
    });

    let save_rating = await rate_employee.save();
    if (save_rating) {
        return res.status(200).json({
            'statusCode': 200,
            'message': 'Rated'
        });
    }

    return res.status(200).json({
        'statusCode': 500,
        'message': 'Something Went Wrong'
    });
}

exports.getRating= async (req, res) => {
	try {
		let userData = await ratingModel.find({});
		res.json({ success: true, data: userData });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};