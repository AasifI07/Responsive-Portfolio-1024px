import React from "react";
import Expimg1 from "../../assets/expimg1.png";
import Expimg2 from "../../assets/expimg2.png";
import "../Experiences/Experiences.css";

function Experiences() {
  return (
    <div>
    <div className="experience_container">
      <div className="left_content">
        <img className="exp_img2" src={Expimg2} alt="Experience Image" />
        <h1 className="exp_h1">Educação e Experiencias</h1>
      </div>
      <div className="exp_detail1">
        <div className="exp_detail_title">
          <h3>Programa Trilhas Inova | SECTIMA</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            id lacus egestas, luctus enim ut, porttitor neque. Aliquam dapibus
            sapien molestie, dictum turpis quis, euismod felis.
          </p>
        </div>
        <div className="exp_detail_title">
          <h3>Programa Trilhas Inova | SECTIMA</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            id lacus egestas, luctus enim ut, porttitor neque. Aliquam dapibus
            sapien molestie, dictum turpis quis, euismod felis.
          </p>
        </div>
      </div>
      <div className="exp_detail2">
        <div className="exp_detail_title">
          <h3>Programa Trilhas Inova | SECTIMA</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            id lacus egestas, luctus enim ut, porttitor neque. Aliquam dapibus
            sapien molestie, dictum turpis quis, euismod felis.
          </p>
        </div>
        <div className="exp_detail_title">
          <h3>Programa Trilhas Inova | SECTIMA</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            id lacus egestas, luctus enim ut, porttitor neque. Aliquam dapibus
            sapien molestie, dictum turpis quis, euismod felis.
          </p>
        </div>
      </div>
      <img className="exp_image1" src={Expimg1}/>
    </div>
  </div>
  
  );
}

export default Experiences;
