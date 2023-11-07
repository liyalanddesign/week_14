import React, { useState } from "react";
import MovieList from "./components/MovieList";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

const moviesDB = [
  {
    id: 1,
    title: "Five Nights at Freddy's",
    image: "/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg",
    synopsis:
      "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
    rating: 4,
    reviews: [{ text: "Amazing movie. Recommended!" }],
  },
  {
    id: 2,
    title: "Saw X",
    image: "/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
    synopsis:
      "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
    rating: 1,
    reviews: [{ text: "Amazing movie. Recommended!" }],
  },
  {
    id: 3,
    title: "Muzzle",
    image: "/qXChf7MFL36BgoLkiB3BzXiwW82.jpg",
    synopsis:
      "LAPD K-9 officer Jake Rosser has just witnessed the shocking murder of his dedicated partner by a mysterious assailant. As he investigates the shooter’s identity, he uncovers a vast conspiracy that has a chokehold on the city in this thrilling journey through the tangled streets of Los Angeles and the corrupt bureaucracy of the LAPD.",
    rating: 1,
    reviews: [{ text: "Amazing movie. Recommended!" }],
  },
  {
    id: 4,
    title: "Fast X",
    image: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    synopsis:
      "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    rating: 1,
    reviews: [{ text: "Amazing movie. Recommended!" }],
  },
  {
    id: 5,
    title: "Retribution",
    image: "/ljl70pjLIX1hx3bPyCCbxGj6WPr.jpg",
    synopsis:
      "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.",
    rating: 1,
    reviews: [{ text: "Amazing movie. Recommended!" }],
  },
  {
    id: 6,
    title: "The Equalizer 3",
    image: "/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
    synopsis:
      "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
    rating: 1,
    reviews: [{ text: "Amazing movie. Recommended!" }],
  },
  {
    id: 7,
    title: "Gran Turismo",
    image: "/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
    synopsis:
      "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
    rating: 1,
    reviews: [{ text: "Amazing movie. Recommended!" }],
  },
  {
    id: 8,
    title: "The Nun II",
    image: "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
    synopsis:
      "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
    rating: 1,
    reviews: [{ text: "Amazing movie. Recommended!" }],
  },
  {
    id: 9,
    title: "The Exorcist: Believer",
    image: "/qVKirUdmoex8SdfUk8WDDWwrcCh.jpg",
    synopsis:
      "When two girls disappear into the woods and return three days later with no memory of what happened to them, the father of one girl seeks out Chris MacNeil, who's been forever altered by what happened to her daughter fifty years ago.",
    rating: 1,
    reviews: [{ text: "Amazing movie. Recommended!" }],
  },
];

const App = () => {
  const [movies, setMovies] = useState(moviesDB);

  const handleReviewSubmit = (movieId, review) => {
    setMovies(
      movies.map((movie) =>
        movie.id === movieId
          ? { ...movie, reviews: [...movie.reviews, review] }
          : movie
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie List App:</h1>
      </header>
      <MovieList movies={movies} onReviewSubmit={handleReviewSubmit} />
    </div>
  );
};

export default App;
