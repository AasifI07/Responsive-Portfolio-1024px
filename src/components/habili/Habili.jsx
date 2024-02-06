import React from "react";
import "../habili/habili.css";
import habiliimg from "..//../assets/habiliimg.png";

function Habili() {
  return (
    <div className="habili_main">
   
        <div  className="habili_hdng" >

         <div>
         <h2>Habilidadades</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
            lacus egestas, luctus enim ut, porttitor neque. Aliquam dapibus
            sapien molestie, dictum turpis quis, euismod felis. Duis hendrerit
            lacus eu quam pharetra, a hendrerit massa sodales. Curabitur lacinia
            leo nisl, sit amet suscipit turpis mollis in.
          </p>
         </div>
          <div className="habili_img">
            <img src={habiliimg} />
          </div>
        </div>
    </div>
  );
}

export default Habili;
