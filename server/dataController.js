var app = require('./index.js');
var db = require("./models");

module.exports = {
	// login: function (req, res) {
	// 	console.log("login hit");
	// 	res.status(200).send("sent");
	// },
	create: function (req, res) {
        // console.log("dataController req", req)
		console.log("in dataController create", req.body)
		db.NewPassword
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => {
				console.log(err)
				res.status(422).json(err)
			});
		// res.status(422).json(err));
	}
};