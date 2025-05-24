import React, { useState } from "react";
import "./index.css";

const Space = () => {
  const BASE_PRICE = 1000;

  const colorOptions = [
    { id: "snow", label: "Snow", cost: 0, hex: "#FFFFFF" },
    { id: "volcano", label: "Volcano", cost: 100, hex: "#FF7A00" },
    { id: "sky", label: "Sky", cost: 100, hex: "#6BE4FF" },
  ];

  const powerOptions = [
    { id: "100mw", label: "100 MW", cost: 0 },
    { id: "150mw", label: "150 MW", cost: 200 },
    { id: "200mw", label: "200 MW", cost: 500 },
  ];

  const warpOptions = [
    { id: "no", label: "NO", cost: 0 },
    { id: "yes", label: "YES", cost: 1000 },
  ];

  const packageOptions = [
    {
      id: "basic",
      label: "Basic",
      cost: 0,
      features: ["Air Conditioning", "Cloth Seats", "FM Radio"],
    },
    {
      id: "sport",
      label: "Sport",
      cost: 100,
      features: ["Air Conditioning", "Cloth Seats", "FM Radio", "Personal tech support"],
    },
    {
      id: "lux",
      label: "Lux",
      cost: 500,
      features: ["Air Conditioning", "Luxury Seats", "Chrome wheels", "Window tint", "Sub woofer"],
    },
  ];

  const [color, setColor] = useState(colorOptions[0].id);
  const [power, setPower] = useState(powerOptions[0].id);
  const [warp, setWarp] = useState(warpOptions[0].id);
  const [pkg, setPkg] = useState(packageOptions[0].id);

  const selectedColorCost = colorOptions.find((c) => c.id === color)?.cost || 0;
  const selectedPowerCost = powerOptions.find((p) => p.id === power)?.cost || 0;
  const selectedWarpCost = warpOptions.find((w) => w.id === warp)?.cost || 0;
  const selectedPackageCost = packageOptions.find((p) => p.id === pkg)?.cost || 0;

  const totalCost = BASE_PRICE + selectedColorCost + selectedPowerCost + selectedWarpCost + selectedPackageCost;

  const highlight = (current, selected) =>
    current === selected ? { outline: "3px solid #000" } : {};

  return (
    <div className="main">
      <div className="left-panel">
        <h1>Spaceship Configurator</h1>

        <div className="color">
          <h3>Select Color:</h3>
        </div>
        <div className="flex-container">
          {colorOptions.map(({ id, label, cost, hex }) => (
            <div key={id} onClick={() => setColor(id)} style={{ cursor: "pointer" }}>
              <center>
                <div
                  style={{
                    width: "64px",
                    height: "32px",
                    backgroundColor: hex,
                    borderRadius: "5px",
                    ...highlight(id, color),
                  }}
                ></div>
                <br />
                <span>+{cost}€</span>
                <br />
                <br />
                <span>{label}</span>
              </center>
            </div>
          ))}
        </div>

        <div className="power">
          <h3>Select Power:</h3>
        </div>
        <div className="flex-container-pw">
          {powerOptions.map(({ id, label, cost }) => (
            <div key={id} onClick={() => setPower(id)} style={{ cursor: "pointer", ...highlight(id, power) }}>
              <center>
                <br />
                <span>{label}</span>
                <br />
                <br />
                <span>+{cost}€</span>
              </center>
            </div>
          ))}
        </div>

        <div className="warpdrive">
          <h3>Warp Drive:</h3>
        </div>
        <div className="flex-container-wd">
          {warpOptions.map(({ id, label, cost }) => (
            <div key={id} onClick={() => setWarp(id)} style={{ cursor: "pointer", ...highlight(id, warp) }}>
              <center>
                <br />
                <span>{label}</span>
                <br />
                <br />
                <span>+{cost}€</span>
              </center>
            </div>
          ))}
        </div>

        <div className="option">
          <h3>Select Option Package:</h3>
        </div>
        <div className="flex-container-sop">
          {packageOptions.map(({ id, label, cost, features }) => (
            <div
              key={id}
              style={{
                backgroundColor: "#5A8F4F",
                cursor: "pointer",
                border: id === pkg ? "3px solid black" : "none",
              }}
              onClick={() => setPkg(id)}
            >
              <center>
                <h3>{label}</h3>
                <span>+{cost}€</span>
                <ul>
                  {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </center>
            </div>
          ))}
        </div>
      </div>

      <div className="right-panel">
        <h3>Pricing Summary</h3>
        <div className="price-row">
          <span>Base price:</span>
          <span>{BASE_PRICE}€</span>
        </div>
        <div className="price-row">
          <span>Color:</span>
          <span>+{selectedColorCost}€</span>
        </div>
        <div className="price-row">
          <span>Power:</span>
          <span>+{selectedPowerCost}€</span>
        </div>
        <div className="price-row">
          <span>Warp drive:</span>
          <span>+{selectedWarpCost}€</span>
        </div>
        <div className="price-row">
          <span>Option package:</span>
          <span>+{selectedPackageCost}€</span>
        </div>
        <div className="total price-row">
          <span>Total:</span>
          <span>{totalCost}€</span>
        </div>
      </div>
    </div>
  );
};

export default Space;
