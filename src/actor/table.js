const { DataTypes} = require ("sequelize");
const { sequelize} = require("../db/connection");

const Actor = sequelize.define("Actor", {
    actorName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = Actor;