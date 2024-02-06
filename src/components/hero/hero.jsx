import React from "react";
import "../hero/hero.css";
import Primarybutton from "../PrimaryButton/Primarybutton";
import image2 from "..//../assets/linkedin.png";
import image3 from "..//../assets/link.png";

const PrimaryButton = [
  {
    imgg: image2,
    title: "Linkedin",
  },
  {
    imgg: image3,
    title: "Curriculo",
  },
]

function Hero() {
  return (
    <div className="hero_div">
      <div className="hero_div1">
          
            <div className="circle3"> 
          </div>
    
            <div className="hero_hdng">
            <div className="hero_hdng1">
                <h2>Sobre Mim</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus id lacus egestas, luctus enim ut, porttitor neque.
                  Aliquam dapibus sapien molestie, dictum turpis quis, euismod
                  felis. Duis hendrerit lacus eu quam pharetra, a hendrerit
                  massa sodales. Curabitur lacinia leo nisl, sit amet suscipit
                  turpis mollis in.
                  <br /> Pellentesque nulla arcu, fermentum ultrices ipsum at,
                  suscipit fermentum mauris. Suspendisse potenti. Aenean vel
                  sagittis velit. Ut et facilisis tellus, eu ornare leo.
                </p>
                </div>
                
           <div className="btnn_2">
              {PrimaryButton?.map((item) => (
               <div key={item?.title}>
                  <Primarybutton  imgg={item?.imgg} title={item?.title} />
                  </div>
              ))}
            </div>
           
               </div>
            </div>
      </div>

  );
}

export default Hero;
