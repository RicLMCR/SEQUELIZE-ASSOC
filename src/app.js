const yargs = require("yargs");
const {sequelize} = require("./db/connection");
const {addMovie,listMovie} = require("./movie/functions");
const {addActor,listActor} = require("./actor/functions");

const app = async (yargsObj)=>{
    
    try {
        await sequelize.sync(); // Must take place before any CRUD operations

        // Check that first key is movie
        if (yargsObj.movie) {

            if (yargsObj.add) {
                await addMovie({
                    title: yargsObj.title,
                    ActorId: yargsObj.actorId
                });
                

            } else if (yargsObj.list) {
                await listMovie();

            } else if (yargsObj.update) {

            } else if (yargsObj.delete) {

            } else {
                console.log("A: Incorrect command");
            }
        // Check that first key is actor    
        } else if (yargsObj.actor) {

            if (yargsObj.add) {
                await addActor ({
                    actorName: yargsObj.actorName
                })

            } else if (yargsObj.list){
                await listActor();
            }
        }
    } catch (error) {
        console.log(error);
    }
    }

app(yargs.argv);


// COMMANDS: MOVIE
// LIST: node src/app.js --movie --add --title "movie1" --actorId "1"
// LIST: node src/app.js --movie --list

// COMMANDS: ACTOR
// ADD: node src/app.js --actor --add --actorName "actor3"
// LIST: node src/app.js --actor --list

