// const Actor = require("./table");//change to associations later
const { Movie, Actor } = require("../associations.js");

// Add Actor
exports.addActor = async (actObj) => {
    try {
        const newActor = await Actor.create(actObj);
        console.log(newActor.dataValues.actorName);
        
    } catch (error) {
        console.log(error)
    }
}

// List Actor
exports.listActor = async () => {
    try {
        const response = await Actor.findAll();
        for (let i =0; i < response.length; i++){
            console.log(response[i].dataValues.actorName)
        }
    } catch (error) {
        console.log(error);
    }
}