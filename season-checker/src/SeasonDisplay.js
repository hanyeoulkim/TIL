import React from "react";

const getSeason = (month, lat) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(new Date().getMonth(), props.lat);
  const text = season === "winter" ? "개츄웡ㄷㄷㄷ" : "개더웡;;;";
  return (
    <div>
      <i className="icon sun" />
      <h1>{text}</h1>
      <i className="icon snowflake" />
    </div>
  );
};

export default SeasonDisplay;
