import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [umar, setUmar] = useState("");
  const [gen, setGen] = useState("");
  const [src, setSrc] = useState("");

  const generate = () => {
    setName("");
    setInfo("");
    setUmar("");
    setGen("");
    setSrc("");
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeInfo = (e) => {
    setInfo(e.target.value);
  };

  const changeUmar = (e) => {
    setUmar(e.target.value);
  };

  const changeGen = (e) => {
    setGen(e.target.value);
  };

  const changeSrc = (e) => {
    setSrc(e.target.value);
  };

  return (
    <>
      <div className="flex p-2 w-full">
        <div className="flex flex-col">
          <h1 className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white p-4 rounded-xl mb-4 content-start hover:scale-110 ease-in-out duration-150">
            Card Generator
          </h1>
          <input
            type="text"
            placeholder="Insert name..."
            className="rounded-md mb-3 p-2 "
            onChange={changeName}
            value={name}
          />

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Insert age..."
              className="rounded-md mb-3 p-2 "
              onChange={changeUmar}
              value={umar}
            />
            <input
              type="text"
              placeholder="Insert gender..."
              className="rounded-md mb-3 p-2 "
              onChange={changeGen}
              value={gen}
            />
          </div>
          {/* <input
            type="text"
            placeholder="Insert info..."
            className="rounded-md mb-3 p-2 resize"
            onChange={changeInfo}
            value={info}
          /> */}
          <textarea
            type="text"
            placeholder="Insert info..."
            className="rounded-md mb-3 p-2 resize"
            onChange={changeInfo}
            value={info}
            rows="2"
          ></textarea>
          <input
            type="text"
            placeholder="Insert image link..."
            className="rounded-md mb-3 p-2 "
            onChange={changeSrc}
            value={src}
          />

          <button
            className="ml-40 mr-40 bg-sky-800 hover:bg-sky-700 text-white"
            onClick={generate}
          >
            clear input
          </button>
        </div>
        <div className="ml-40">
          <Card
            username={name || "Lucy"}
            age={umar || "25"}
            gender={gen || "F"}
            btnText="visit me"
            imgSrc={
              src ||
              "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            infor={
              info || "The information of the card creator will be shown here"
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
