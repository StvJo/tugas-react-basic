import axios from "axios";
import CatItem from "./CatItem";
import { useState, useEffect } from "react";

const CatList = () => {
  const [cats, catsTemp] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(async () => {
    const result = await axios.get("https://api.thecatapi.com/v1/breeds");

    catsTemp(result.data);
  }, []);

  const styleText = cats.length === 0 ? { color: "red" } : { color: "green" };

  return (
    <>
      <input
        type="text"
        onChange={(event) => setInputSearch(event.target.value)}
      />
      <h1 style={styleText}>Cats List</h1>
      <br />
      <br />
      {cats
        .filter((cat) => {
          if (inputSearch === "") {
            return cat;
          } else if (
            cat.name.toLowerCase().includes(inputSearch.toLowerCase())
          ) {
            return cat;
          }
        })
        .map((cat, index) => (
          <div key={index}>
            <CatItem cat={cat} />
          </div>
        ))}
    </>
  );
};

export default CatList;
