import { useState, useEffect } from "react";
import StudentCard from "../StudentCard";
import { v4 as uuid_v4 } from "uuid";

import "./style.css";
import api from "../../services";

import female from "../../assets/img/female.jpeg";
import male from "../../assets/img/male.jpeg";

const Students = ({ setShowWinner }) => {
  const [StudentsList, setStudentsList] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    api.get("api/characters/students").then((response) => {
      setStudentsList(response.data);
      SetIsLoading(false);
    });
  }, []);

  // muda a imagem dos estudantes que não a possuem

  const changedImg = StudentsList.map((e) => {
    if (e.image === "" && e.gender === "male") {
      return { ...e, image: male };
    }

    if (e.image === "" && e.gender === "female") {
      return { ...e, image: female };
    }

    return e;
  });
  // substituir a ancestralidade vazia por unknown

  const changedAncestry = changedImg.map((e) => {
    return e.ancestry === "" ? { ...e, ancestry: "Unknown" } : e;
  });

  // separar as casas em 4 arrays

  const Gryffindor = [];
  const Ravenclaw = [];
  const Hufflepuff = [];
  const Slytherin = [];

  changedAncestry.forEach((student) => {
    student.house === "Gryffindor" && Gryffindor.push(student);
    student.house === "Ravenclaw" && Ravenclaw.push(student);
    student.house === "Hufflepuff" && Hufflepuff.push(student);
    student.house === "Slytherin" && Slytherin.push(student);
  });

  // embaralhar o array das casas e seleciona o primeiro

  const selectedGryffindor = Gryffindor.sort(() => 0.5 - Math.random())[0];
  const selectedRavenclaw = Ravenclaw.sort(() => 0.5 - Math.random())[0];
  const selectedHufflepuff = Hufflepuff.sort(() => 0.5 - Math.random())[0];
  const selectedSlytherin = Slytherin.sort(() => 0.5 - Math.random())[0];

  // juntar e embaralhar o array com o primeiro de cada casa

  const competitors = [
    selectedGryffindor,
    selectedRavenclaw,
    selectedHufflepuff,
    selectedSlytherin,
  ].sort(() => 0.5 - Math.random());

  // pegar os 3 primeiros

  const result = competitors.slice(0, 3);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className="container">
      <div className="containerStudents">
        {result.map(function (char, index) {
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
