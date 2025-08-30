import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

function Player() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [apiData, setApiData] = useState({
    name: "",
    published_at: "",
    type: "",
    key: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDQxNjBlZGFlM2JiYjk3NDQ3MjhmMzBiNTEwYjQyNSIsIm5iZiI6MTY4NDUxOTQ5Ny4xNTgwMDAyLCJzdWIiOiI2NDY3YmE0OTMzYTM3NjAxNThkOTJkNmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0m4BwPP1lae8JdDE6xQKYS7t31-U0Fi7E5HmLx8RycE",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="player">
      {/* Back arrow */}
      <img
        src={back_arrow_icon}
        alt="Back"
        className="back-arrow"
        onClick={() => navigate(-1)}
      />

      {/* Responsive video */}
      <div className="player-video">
        <iframe
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="trailer"
          allowFullScreen
        ></iframe>
      </div>

      {/* Info section */}
      <div className="player-info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;

// import React, { useEffect, useState } from "react";
// import "./Player.css";
// import back_arrow_icon from "../../assets/back_arrow_icon.png";
// import { useNavigate, useParams } from "react-router-dom";

// function Player() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [apiData, setApiData] = useState({
//     name: "",
//     publishedDate: "",
//     type: "",
//   });
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDQxNjBlZGFlM2JiYjk3NDQ3MjhmMzBiNTEwYjQyNSIsIm5iZiI6MTY4NDUxOTQ5Ny4xNTgwMDAyLCJzdWIiOiI2NDY3YmE0OTMzYTM3NjAxNThkOTJkNmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0m4BwPP1lae8JdDE6xQKYS7t31-U0Fi7E5HmLx8RycE",
//     },
//   };
//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
//       options
//     )
//       .then((res) => res.json())
//       .then((res) => setApiData(res.results[0]))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="player">
//       <img
//         src={back_arrow_icon}
//         alt=""
//         onClick={() => {
//           navigate(-1);
//         }}
//       />
//       <iframe
//         width="90%"
//         height="90%"
//         src={`https://www.youtube.com/embed/${apiData.key}`}
//         title="trailer"
//         frameBorder="0"
//         allowFullScreen
//       ></iframe>
//       <div className="player-info">
//         <p>{apiData.published_at}</p>
//         <p>{apiData.name}</p>
//         <p>{apiData.type}</p>
//       </div>
//     </div>
//   );
// }

// export default Player;
