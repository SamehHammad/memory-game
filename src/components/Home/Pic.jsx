import React from "react";

const Pic = ({src,imgClick,imgStyle}) => {
  return <img src={src} alt={src} width={80} onClick={imgClick} style={imgStyle}/>;
};

export default Pic;
