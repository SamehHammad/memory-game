import React from "react";

const Mob = ({src,imgClick,imgStyle}) => {
  return <img src={src} alt={src} width={80} onClick={imgClick} style={imgStyle}/>;
};

export default Mob;
