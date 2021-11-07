import { useState, useEffect } from "react";
import StudentCard from "../StudentCard";
import { v4 as uuid_v4 } from "uuid";

import "./style.css";

const Students = ({ setShowWinner }) => {
  const [StudentsList, setStudentsList] = useState([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudentsList(response));
  }, []);

  const filterImg = StudentsList.filter((e) => e.image !== "");

  const changeAncestry = filterImg.map((e) => {
    return e.ancestry === "" ? { ...e, ancestry: "Unknown" } : e;
  });

  const shuffled = changeAncestry.sort(() => 0.5 - Math.random());

  const houseFilter = [
    ...shuffled
      .reduce((map, obj) => map.set(obj.house, obj), new Map())
      .values(),
  ];

  let selected = houseFilter.slice(0, 3);

  return (
    <div className="container">
      <div className="containerStudents">
        {selected.map(function (char, index) {
          const style = { "animation-delay": 0.5 + index * 2 + "s" };

          return (
            <StudentCard
              key={uuid_v4()}
              student={char}
              style={style}
              index={index}
            />
          );
        })}
      </div>
      <div className="restart" onClick={() => setShowWinner(false)}>
        Restart
      </div>
    </div>
  );
};

export default Students;
