// ------------------------------
// MOVIE DATA
// ------------------------------

const movies = {

    "Taare Zameen Par": {
        year: "2007",
        genre: "Family, Education, Drama",
        rating: "8.3/10",
        description:
            "A meaningful story focusing on childhood, education, creativity and understanding individual abilities."
    },

    "Baahubali": {
        year: "2015",
        genre: "Action, Drama",
        rating: "8.0/10",
        description:
            "An epic action drama involving kingdoms, courage, adventure and family."
    },

    "KGF": {
        year: "2018",
        genre: "Action, Drama",
        rating: "8.2/10",
        description:
            "An action drama following Rocky and his journey for power and success."
    },

    "Dangal": {
        year: "2016",
        genre: "Sports, Family, Drama",
        rating: "8.3/10",
        description:
            "An inspiring sports drama about wrestling, determination and family."
    },

    "English Vinglish": {
        year: "2012",
        genre: "Family, Comedy, Drama",
        rating: "7.8/10",
        description:
            "A warm story about learning, confidence, self-respect and personal growth."
    },

    "Hichki": {
        year: "2018",
        genre: "Education, Drama",
        rating: "7.5/10",
        description:
            "An inspiring story about a teacher overcoming challenges while helping her students."
    }
};


// ------------------------------
// RECOMMEND MOVIES
// ------------------------------

function recommendMovie() {

    const genre =
        document.getElementById("genre").value;

    const result =
        document.getElementById("recommendationResult");


    if (genre === "") {

        result.innerHTML =
            "⚠️ Please select a genre first.";

        result.style.background = "#292929";

        return;
    }


    let recommendedMovies = [];


    if (genre === "action") {

        recommendedMovies =
            ["Baahubali", "KGF"];

    }

    else if (genre === "family") {

        recommendedMovies =
            [
                "Taare Zameen Par",
                "English Vinglish",
                "Dangal"
            ];

    }

    else if (genre === "education") {

        recommendedMovies =
            [
                "Taare Zameen Par",
                "Hichki"
            ];

    }

    else if (genre === "sports") {

        recommendedMovies =
            ["Dangal"];

    }

    else if (genre === "drama") {

        recommendedMovies =
            [
                "Taare Zameen Par",
                "Baahubali",
                "KGF",
                "Dangal",
                "English Vinglish",
                "Hichki"
            ];

    }


    let output =
        "<h3>🎯 Recommended For You</h3>";


    output +=
        "<p><strong>Why recommended?</strong> " +
        "These movies match your selected " +
        genre.toUpperCase() +
        " genre.</p>";


    recommendedMovies.forEach(function(movie) {

        output +=
            "<div class='favorite-item'>" +
            "🎬 " +
            movie +
            " &nbsp; ⭐ " +
            movies[movie].rating +
            "</div>";

    });


    result.innerHTML = output;

    result.style.background = "#242424";

    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// ------------------------------
// SEARCH MOVIE
// ------------------------------

function searchMovie() {

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();


    const cards =
        document.querySelectorAll(".movie-card");


    cards.forEach(function(card) {

        const movieName =
            card.getAttribute("data-name");

        const movieGenre =
            card.getAttribute("data-genre");


        if (
            movieName.includes(search) ||
            movieGenre.includes(search)
        ) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });
}


// ------------------------------
// MOVIE DETAILS
// ------------------------------

function showDetails(movieName) {

    const movie = movies[movieName];

    document.getElementById("modalTitle")
        .innerText = movieName;


    document.getElementById("modalDetails")
        .innerHTML =

        "<strong>Year:</strong> " +
        movie.year +

        "<br><br>" +

        "<strong>Genre:</strong> " +
        movie.genre +

        "<br><br>" +

        "<strong>Rating:</strong> ⭐ " +
        movie.rating +

        "<br><br>" +

        "<strong>Description:</strong><br>" +
        movie.description;


    document.getElementById("movieModal")
        .style.display = "flex";
}


function closeDetails() {

    document.getElementById("movieModal")
        .style.display = "none";

}


// Close popup when clicking outside

window.onclick = function(event) {

    const modal =
        document.getElementById("movieModal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

};


// ------------------------------
// FAVORITES
// ------------------------------

let favorites = [];


function addFavorite(movieName) {

    if (!favorites.includes(movieName)) {

        favorites.push(movieName);

        alert(
            movieName +
            " added to favorites! ❤️"
        );

    }

    else {

        alert(
            movieName +
            " is already in your favorites."
        );

    }

    displayFavorites();
}


function displayFavorites() {

    const favoriteList =
        document.getElementById("favoriteList");


    if (favorites.length === 0) {

        favoriteList.innerHTML =
            "<p>No favorite movies added yet.</p>";

        return;
    }


    let output = "";


    favorites.forEach(function(movie) {

        output +=
            "<div class='favorite-item'>" +
            "❤️ " +
            movie +
            "</div>";

    });


    favoriteList.innerHTML = output;
}


function clearFavorites() {

    favorites = [];

    displayFavorites();

    alert("Favorites cleared.");
}


// ------------------------------
// DARK / LIGHT MODE
// ------------------------------

function changeTheme() {

    document.body.classList.toggle(
        "light-mode"
    );

}