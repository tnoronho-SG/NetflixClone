import "./App.css";
import React from "react";
import MovieRow from "./components/MovieRow";
import { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import FeaturedMovie from "./components/FeaturedMovie";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      console.log(list);
    };
    loadAll();
  }, []);
  
  return (
    <div className="page">
      <FeaturedMovie movieId={1061474} />
      <section className="lists">
        {movieList.map((item, key) => {
          return (
            <div key={key}>
              <MovieRow title={item.title} items={item.items} />
            </div>
          );})}
      </section>
    </div>
  );}
export default App;
