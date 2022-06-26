const yargs = require("yargs");
const {sequelize} = require("./db/connection");
const {addMovie,listMovie, updateMovie, deleteMovie} = require("./movie/functions");
const {addActor,listActor} = require("./actor/functions");

const app = async (yargsObj)=>{
    
    try {
        await sequelize.sync(); // Must take place before any CRUD operations

        // Check that first key is movie
        if (yargsObj.movie) {

            // Add movie (and actor)
            if (yargsObj.add) {
                await addMovie({title: yargsObj.title, ActorId: yargsObj.actorId});
            // List movie and actor
            } else if (yargsObj.list) {
                await listMovie();

            } else if (yargsObj.update) {
                await updateMovie ({ title: yargsObj.newTitle}, {title: yargsObj.title});

            } else if (yargsObj.delete) {
                await deleteMovie ({title: yargsObj.title});

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
// UPDATE: node src/app.js --movie --update --title "movie1" --newTitle "movie3"
// DELETE: node src/app.js --movie --delete --title "movie1"

// COMMANDS: ACTOR
// ADD: node src/app.js --actor --add --actorName "actor3"
// LIST: node src/app.js --actor --list

