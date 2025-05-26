import React, { useState } from "react";
import "./index.css";

const Space = () => {
  const BASE_PRICE = 1000;

  const [color, setColor] = useState("snow");
  const [power, setPower] = useState("100mw");
  const [warp, setWarp] = useState("no");
  const [pkg, setPkg] = useState("basic");

 
  const colorCost = color === "volcano" || color === "sky" ? 100 : 0;
  const powerCost = power === "150mw" ? 200 : power === "200mw" ? 500 : 0;
  const warpCost = warp === "yes" ? 1000 : 0;
  const packageCost = pkg === "sport" ? 100 : pkg === "lux" ? 500 : 0;

  const total = BASE_PRICE + colorCost + powerCost + warpCost + packageCost;

  const getBorder = (current, selected) =>
    current === selected ? { outline: "3px solid purple" } : {};

  return (
    <div className="main">
      <div className="left-panel">
        <h1>Spaceship Configurator</h1>

        
        <h3>Select Color:</h3>
        <div className="flex-container">
          <div onClick={() => setColor("snow")} style={{ cursor: "pointer" }}>
            <center>
            <div
              style={{
                width: "64px",
                height: "32px",
                backgroundColor: "#FFFFFF",
                borderRadius: "5px",
                ...getBorder("snow", color),
              }}
            />
            <br />
              <span>+0€</span><br /><br />
              <span>Snow</span>
            </center>
          </div>

          <div onClick={() => setColor("volcano")} style={{ cursor: "pointer" }}>
            <center>
            <div
              style={{
                width: "64px",
                height: "32px",
                backgroundColor: "#FF7A00",
                borderRadius: "5px",
                ...getBorder("volcano", color),
              }}
            /> <br />
            
              <span>+100€</span><br /><br />
              <span>Volcano</span>
            </center>
          </div>

          <div onClick={() => setColor("sky")} style={{ cursor: "pointer" }}>
            <center>
            <div
              style={{
                width: "64px",
                height: "32px",
                backgroundColor: "#6BE4FF",
                borderRadius: "5px",
                ...getBorder("sky", color),
              }}
            /> <br />
            
              <span>+100€</span><br /><br />
              <span>Sky</span>
            </center>
          </div>
        </div>

        
        <h3>Select Power:</h3>
        <div className="flex-container-pw">
          <div onClick={() => setPower("100mw")} style={{ cursor: "pointer", ...getBorder("100mw", power) }}>
            <center>
              <span>100 MW</span><br /><br />
              <span>+0€</span>
            </center>
          </div>

          <div onClick={() => setPower("150mw")} style={{ cursor: "pointer", ...getBorder("150mw", power) }}>
            <center>
              <span>150 MW</span><br /><br />
              <span>+200€</span>
            </center>
          </div>

          <div onClick={() => setPower("200mw")} style={{ cursor: "pointer", ...getBorder("200mw", power) }}>
            <center>
              <span>200 MW</span><br /><br />
              <span>+500€</span>
            </center>
          </div>
        </div>

        
        <h3>Warp Drive:</h3>
        <div className="flex-container-wd">
          <div onClick={() => setWarp("no")} style={{ cursor: "pointer", ...getBorder("no", warp) }}>
            <center>
              <span>NO</span><br /><br />
              <span>+0€</span>
            </center>
          </div>

          <div onClick={() => setWarp("yes")} style={{ cursor: "pointer", ...getBorder("yes", warp) }}>
            <center>
              <span>YES</span><br /><br />
              <span>+1000€</span>
            </center>
          </div>
        </div>

      
        <h3>Select Option Package:</h3>
        <div className="flex-container-sop">
          <div
            onClick={() => setPkg("basic")}
            style={{ backgroundColor: "#5A8F4F", cursor: "pointer", border: pkg === "basic" ? "3px solid purple" : "none" }}
          >
            <center>
              <h3>Basic</h3>
              <span>+0€</span>
              <ul>
                <li>Air Conditioning</li>
                <li>Cloth Seats</li>
                <li>FM Radio</li>
              </ul>
            </center>
          </div>

          <div
            onClick={() => setPkg("sport")}
            style={{ backgroundColor: "#5A8F4F", cursor: "pointer", border: pkg === "sport" ? "3px solid purple" : "none" }}
          >
            <center>
              <h3>Sport</h3>
              <span>+100€</span>
              <ul>
                <li>Air Conditioning</li>
                <li>Cloth Seats</li>
                <li>FM Radio</li>
                <li>Personal tech support</li>
              </ul>
            </center>
          </div>

          <div
            onClick={() => setPkg("lux")}
            style={{ backgroundColor: "#5A8F4F", cursor: "pointer", border: pkg === "lux" ? "3px solid purple" : "none" }}
          >
            <center>
              <h3>Lux</h3>
              <span>+500€</span>
              <ul>
                <li>Air Conditioning</li>
                <li>Luxury Seats</li>
                <li>Chrome wheels</li>
                <li>Window tint</li>
                <li>Sub woofer</li>
              </ul>
            </center>
          </div>
        </div>
      </div>

  
      <div className="right-panel">
        <h3>Pricing Summary</h3>
        <div className="price-row"><span>Base price:</span><span>{BASE_PRICE}€</span></div>
        <div className="price-row"><span>Color:</span><span>+{colorCost}€</span></div>
        <div className="price-row"><span>Power:</span><span>+{powerCost}€</span></div>
        <div className="price-row"><span>Warp drive:</span><span>+{warpCost}€</span></div>
        <div className="price-row"><span>Option package:</span><span>+{packageCost}€</span></div>
        <div className="total price-row"><span>Total:</span><span>{total}€</span></div>
      </div>
    </div>
  );
};

export default Space;
