import React, { useEffect, useState } from "react";
import Navbar from "./Nav/Navbar";
import Todo from "./Todo/Todo";
import Axios from "axios";
import Tables from "./Table/Tables";

function App() {
  const [data, setDate] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("Getting from ::::", res.data);
        setDate(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const arr = data.map((data, index) => {
    return (
      <tr key={index}>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>
    );
  });

  return (
    <>
      <Navbar />
      <Todo></Todo>
      <Tables />
      {arr}
    </>
  );
}

export default App;
