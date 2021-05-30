import React, { useState } from "react";
import Error from "./Error";
interface Props {
  setSearch(search: string): void;
}
const Form = ({ setSearch }: Props) => {
  const [thematic, setThematic] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (thematic.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setSearch(thematic);
  };

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThematic(e.target.value);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search an image"
            onChange={handlerOnChange}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Search"
          />
        </div>
      </div>
      {error ? <Error message="Add a search thematic" /> : null}
    </form>
  );
};

export default Form;
