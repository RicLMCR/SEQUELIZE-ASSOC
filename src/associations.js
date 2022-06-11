const Actor = require('./actor/table');
const Movie = require('./movie/table');


Actor.hasOne(Movie);
Movie.belongsTo(Actor);

module.exports = {
    Actor, 
    Movie,
};