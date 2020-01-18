// var Sequelize = require('sequelize');

module.exports = function(sequelize, Datatypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: Datatypes.STRING,
        devoured: {
            type: Datatypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: function(models) {

            }
        }
    });
    return Burger;
};