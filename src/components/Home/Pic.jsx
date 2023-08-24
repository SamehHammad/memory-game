import React from "react";

const Pic = ({src,imgClick,imgStyle}) => {
  return <img src={src} alt={src}  onClick={imgClick} style={imgStyle}/>;
};

export default Pic;
