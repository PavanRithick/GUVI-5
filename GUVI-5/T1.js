//Constructor for the class Movie
class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
//Constructor setting default rating to "PG"
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
//Method getPG


    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }

//Code to create an instance of Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
