var Sequelize = require('sequelize');


const Burger = sequelize.define("Burger", {
        burger_name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        devoured:{
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false            
        }
    });
module.exports = Burger;
