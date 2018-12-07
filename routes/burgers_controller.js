var db = require("../models");


// Create all our routes and set up logic within those routes where required.


module.exports = function (app) {

    app.get("/", function (req, res) {
        db.burgers.findAll({}).then(function (dbburgers) {
            var hbsObject = {
                burgers: dbburgers
            }
            res.render("index", hbsObject);
        });
    });

    app.post("/api/burgers", function (req, res) {
        db.burgers.create({
            burger_name: req.body.name
        }).then(function (dbburgers) {
            res.render("index", dbburgers);
        }).catch(function (err) {
            res.json(err);
        });
    });

    app.put("/api/burgers/:id", function (req, res) {
        db.burgers.update({
            devoured: true
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (dbburgers) {
                res.json(dbburgers);
            }).catch(function (err) {
                res.json(err);
            });
    });
};
