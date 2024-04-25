import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/variant";

const Slider = () => {
  const api = "42bc9d6ddd851cab5049851cba11042d";
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api}&page=2`;
  const [movies, setMoveis] = useState([]);
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        if (res.data.results) {
          setMoveis(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const imageUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      style={{
        minHeight: 200,
        display: "flex",
        overflowX: "scroll",
        padding: "10px 20px",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        <ul
          style={{
            display: "flex",
            flexWrap: "nowrap",

            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            listStyle: "none",
          }}
        >
          {movies.map((movie) => {
            return (
              <motion.li
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                key={movie.id}
              >
                <img
                  loading="lazy"
                  style={{
                    display: "inline",
                    width: "150px",
                    borderRadius: "10px",
                  }}
                  src={`${imageUrl}${movie.poster_path}`}
                  alt=""
                />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
