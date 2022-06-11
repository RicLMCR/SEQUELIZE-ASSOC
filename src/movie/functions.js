// const Movie = require("./table");//change to associations later
const { Movie, Actor } = require("../associations.js");

// Add Movie
exports.addMovie = async (movieObj) => {
    try {
        const newMovie = await Movie.create(movieObj);
        // console.log(newMovie.dataValues.title, newMovie.dataValues.ActorId);
        console.log(newMovie)
        
    } catch (error) {
        console.log(error)
    }
}

// List Movie
exports.listMovie = async () => {
    try {
        const movie = await Movie.findAll();
        const arr = [];
        
        for (let i = 0; i < movie.length; i++) {
            const actor = await Actor.findAll({where: { id: movie[i].ActorId }})
            arr.push({title: movie[i].title, actor: actor[0].dataValues.actorName});
        }

        arr.forEach(item => console.log(item.title, item.actor))
       
    } catch (error) {
        console.log(error);
    }
}

// exports.updMovie = async (updateObj, filterObj) => {
//     try {
//       //find a movie and update a column
//       const response = await Movie.update(updateObj, { where: filterObj })
//       if (response[0] > 0) {
//         console.log("Successfully updated");
//       } else {
//         console.log("Something went wrong");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

// // Delete Movie
// exports.delMovie = async (filterObj) => {
//     try {
//         const response = await Movie.destroy({
//             where: {
//                 title: filterObj.title
//             }
//         });
//         if (response > 0){
//             console.log("Successfully deleted")
//         } else {
//             console.log("Something went wrong");
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }