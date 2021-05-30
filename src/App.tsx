import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import ImagesList from "./components/ImagesList";
import { ImageResponse, Hit } from "./models/images.models";
import { ImagesService } from "./services/image.service";

function App() {
  const [search, setSearch] = useState<string>("");
  const [hits, setHits] = useState<Hit[]>([]);
  const [current, setCurrent] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    if (search === "") return;

    const getImages = async () => {
      const imagesByPage = 10;

      const images: ImageResponse = await ImagesService.getImages(
        search,
        imagesByPage,
        current
      );

      setHits(images.hits);
      const totalPages = ImagesService.getTotalPages(
        images.totalHits,
        imagesByPage
      );
      setTotalPages(totalPages);

      const jumbotron = document.querySelector(".jumbotron");
      jumbotron?.scrollIntoView({ behavior: "smooth" });
    };

    getImages();
  }, [search, current]);

  const handlerOnPrevious = () => {
    const newCurrentPage = current - 1;
    if (newCurrentPage === 0) {
      return;
    }
    setCurrent(newCurrentPage);
  };

  const handlerOnNext = () => {
    const newCurrentPage = current + 1;
    if (newCurrentPage === totalPages + 1) {
      return;
    }
    setCurrent(newCurrentPage);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <div className="lead text-center">Find Images</div>
        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ImagesList images={hits} />
        {current === 1 ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={handlerOnPrevious}
          >
            &laquo; Previous
          </button>
        )}
        {current === totalPages ? null : (
          <button
            type="button"
            className="btn btn-info"
            onClick={handlerOnNext}
          >
            Next &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
