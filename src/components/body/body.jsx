import React from "react";
import "./body.css";
import Primarybutton from "../PrimaryButton/Primarybutton";
import bodyimg from "..//../assets/bodyimg.png";

import image from "..//../assets/wpp.png";
import image2 from '..//../assets/linkedin.png';
import image3 from '../../assets/link.png';

const arr = [image,image2,image3]
const PrimaryButton = [
  {
    imgg:image,
    title: "FALE COMIGO",
  },
];

function Body() {
  return (
    <div className="body_1">
     
        <div className="body_a">
          <div className="body_b">
            <h4>Meu nome é</h4>
            <h2>ALUNO TRILHAS</h2>
            <h3>DESENVOLVEDOR FULLSTACK EM FORMAÇÃO</h3>
            <div className="btnn">
              {PrimaryButton?.map((item) => (
               <div key={item?.title}>
                  <Primarybutton  imgg={item?.imgg} title={item?.title} />
                  </div>
              ))}
            </div>
            
          </div>
          <div className="img_div">
              <img src={bodyimg} alt="bodyimg" className="b_img" />
            </div>
        </div>
      </div>

  );
}

export default Body;
