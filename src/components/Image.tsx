import React from "react";
import { Hit } from "../models/images.models";

interface Props {
  image: Hit;
}

const Image = ({ image }: Props) => {
  return (
   
      <div className="card">
        <img src={image.largeImageURL} alt={image.tags} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">{image.likes} Liked</p>
          <p className="card-text">{image.views} Views</p>
        </div>
        <div className="card-footer">
          <a
            href={image.largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block"
          >
            Viw Image
          </a>
        </div>
      </div>
   
  );
};

export default Image;
