import React from "react";
import "../styles/Loading.css";

function Loading() {
  return (
    <div className="center">
      <div className="text">Carregando....</div>
      <div className="ring"></div>
    </div>
  );  
}

export default Loading;