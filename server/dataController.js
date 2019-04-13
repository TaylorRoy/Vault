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
	},
	findAll: function(req, res) {
		console.log("in dataController findAll", req.body)
		db.NewPassword
		  .find(req.query)
		  .sort({ date: -1 })
		  .then(dbModel => res.json(dbModel))
		  .catch(err => res.status(422).json(err));
		},
		remove: function(req, res) {
			console.log("remove req.params", req.params.id)
			db.NewPassword
				.findById({ _id: req.params.id })
				.then(dbModel => dbModel.remove())
				.then(dbModel => res.json(dbModel))
				.catch(err => res.status(422).json(err));
		}
};