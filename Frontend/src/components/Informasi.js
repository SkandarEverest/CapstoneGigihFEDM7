import { Image } from "react-bootstrap";
import "./Informasi.css";
import ph from "../assets/phtheme.png";
import graphic from "../assets/ketinggian.png";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
const ketinggianAirRef = ref(db, "sensor");

const Informasi = () => {
  const [todo, setTodo] = useState({ ketinggianAir: 0, phAir: 0 });

  //read
  useEffect(() => {
    onValue(ketinggianAirRef, (snapshot) => {
      setTodo({ ketinggianAir: 0, phAir: 0 });
      const data = snapshot.val();
      if (data !== null) {
        setTodo(data);
      }
    });
  }, []);

  return (
    <div className="information">
      <div className="PHAir row">
        <div className="text1 col-6">
          <h2>PH Air</h2>
          <p>Melihat tingkat PH Air pada Sungai Citarum sebagai tolak ukur dalam menilai kualitas air.</p>
        </div>
        <div className="informationPicture1 col-6">
          <p>pH : {todo.phAir}</p>
          <Image src={ph} alt="ph" className="PHImage center" />
        </div>
      </div>

      <div className="KetinggianAir row">
        <div className="informationPicture2 col-6">
          <p>{todo.ketinggianAir} cm</p>
          <Image src={graphic} alt="graphic" className="KetinggianImage center" />
        </div>
        <div className="text1 col-6">
          <h2>Ketinggian Air</h2>
          <p>Mengukur ketinggian Air Sungai Citarum untuk mengetahui tingkat kekeringan maupun luapan air yang berlebihan.</p>
        </div>
      </div>
    </div>
  );
};
export default Informasi;
