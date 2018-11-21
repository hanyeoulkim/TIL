import React from "react";

export default function ImageList(props) {
  const images = props.images.map(image => {
      return (
          <div key={image.id}>
      <img 
        src={image.urls.small} 
        alt={image.descrtiption}
      />
      </div>
      )
  });
console.log(props.images)
  return (
    <div>
        {images}
    </div>
    )
}
