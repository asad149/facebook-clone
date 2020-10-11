import React from "react";
import { Avatar } from "@material-ui/core";
import "./Story.css";

const Story = ({ image, porfileSrc, title }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={porfileSrc} />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
