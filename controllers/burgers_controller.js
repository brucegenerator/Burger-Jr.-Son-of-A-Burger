var express = require("express");

var router = express.Router();;

var db = require("../models")

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  db.Burger.findAll({})
  .then(function(result) {
    var obj = { burger: result };
    return res.render("index", obj);
  });
});
router.post("/burgers/create", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function(result) {
    console.log(res);
    console.log(result);
    res.redirect("/");
  });
});
router.put("/burgers/:id", function(req, res) {
  db.Burger.update({
    devoured: true
  },{
    where:  {id:req.params.id}
  }
  ).then(function(){
    res.json("/");
  });
});

module.exports = router;
