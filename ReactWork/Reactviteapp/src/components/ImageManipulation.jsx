import React, { useState } from "react";
import cat from "./cat.png";

function ImageManipulation() {
  const [imgHeight, setImgHeight] = useState(350);
  const [imgWidth, setImgWidth] = useState(350);
  const [rotation, setRotation] = useState(0);

  const increaseHeight = () => setImgHeight(imgHeight + 20);
  const decreaseHeight = () => imgHeight > 50 && setImgHeight(imgHeight - 20);
  const increaseWidth = () => setImgWidth(imgWidth + 20);
  const decreaseWidth = () => imgWidth > 50 && setImgWidth(imgWidth - 20);

  const rotateLeft = () => setRotation(rotation - 15);
  const rotateRight = () => setRotation(rotation + 15);

  return (
    <div>
      <h2>Image Manipulation</h2>

      <div
        style={{
          border: "1px solid green",
          width: "450px",
          height: "450px",
          padding: "5px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          src={cat}
          alt="cat"
          width={imgWidth}
          height={imgHeight}
          style={{
            border: "1px solid orange",
            transform: `rotate(${rotation}deg)`,
            transition: "all 0.3s ease"
          }}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={increaseHeight}>Increase Height</button>
        <button onClick={decreaseHeight} style={{ marginLeft: "10px" }}>
          Decrease Height
        </button>
        <button onClick={increaseWidth} style={{ marginLeft: "10px" }}>
          Increase Width
        </button>
        <button onClick={decreaseWidth} style={{ marginLeft: "10px" }}>
          Decrease Width
        </button>
        <button onClick={rotateLeft} style={{ marginLeft: "10px" }}>
          Rotate Left ⟲
        </button>
        <button onClick={rotateRight} style={{ marginLeft: "10px" }}>
          Rotate Right ⟳
        </button>
      </div>

      <p>Current Height: {imgHeight}px</p>
      <p>Current Width: {imgWidth}px</p>
      <p>Current Rotation: {rotation}°</p>
    </div>
  );
}

export default ImageManipulation;
