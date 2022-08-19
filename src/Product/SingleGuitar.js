import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

import guitarData from "../datas/guitarData";
import "./styles/singleGuitar-style.css";

const SingleGuitar = () => {
  const { closeSubmenu } = useGlobalContext();
  const { id } = useParams();

  const [name, setName] = useState("default name");
  const [image, setImage] = useState({});
  const [brand, setBrand] = useState("default brand");
  const [color, setColor] = useState("default color");
  const [price, setPrice] = useState("default price");
  const [Body, setBody] = useState("default Body");
  const [BodyFinish, setBodyFinish] = useState("default BodyFinish");
  const [ControlKnobs, setControlKnobs] = useState("default ControlKnobs");
  const [HardwareFinish, setHardwareFinish] = useState(
    "default HardwareFinish"
  );
  const [NeckFinish, setNeckFinish] = useState("default NeckFinish");
  const [Pickguard, setPickguard] = useState("default Pickguard");
  const [PositionInlays, setPositionInlays] = useState(
    "default PositionInlays"
  );

  useEffect(() => {
    const eachGuitar = guitarData.find((guitar) => guitar.id === id);
    setName(eachGuitar.name);
    setBrand(eachGuitar.brand);
    setColor(eachGuitar.color);
    setPrice(eachGuitar.price);
    setImage(eachGuitar.image);
    setBody(eachGuitar.Body);
    setBodyFinish(eachGuitar.BodyFinish);
    setControlKnobs(eachGuitar.ControlKnobs);
    setHardwareFinish(eachGuitar.HardwareFinish);
    setNeckFinish(eachGuitar.NeckFinish);
    setPickguard(eachGuitar.Pickguard);
    setPositionInlays(eachGuitar.PositionInlays);
  }, [id]);

  return (
    <React.Fragment>
      <section className="single-guitar-hero" onMouseOver={closeSubmenu}>
        <div className="single-guitar-center" key={id}>
          <h3 className="single-guitar-title">{name}</h3>
          <div className="single-guitar-section">
            <img
              src={image.url}
              alt={name}
              className="single-guitar-img single-guitar-image"
            />
            <div className="single-guitar-info">
              <h3>Guitar Infomation</h3>
              <p>Brand: {brand}</p>
              <p>Color: {color}</p>
              <p>Body : {Body}</p>
              <p>Body Finish: {BodyFinish}</p>
              <p>Control Knobs: {ControlKnobs}</p>
              <p>Hardware Finish: {HardwareFinish}</p>
              <p>Neck Finish: {NeckFinish}</p>
              <p>Pickguard: {Pickguard}</p>
              <p>Position Inlays: {PositionInlays}</p>

              <Link to="/products">
                <button className="single-guitar-btn">Return</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SingleGuitar;
