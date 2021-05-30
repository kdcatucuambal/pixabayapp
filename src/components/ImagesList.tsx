import React from "react";
import { Hit } from "../models/images.models";
import Image from "./Image";
type Props = {
  images: Hit[];
};

const ImagesList = ({ images }: Props) => {
  return (
    <div className="card-columns">
      {images.map((image) => (
        <Image key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImagesList;
