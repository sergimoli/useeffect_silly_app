import React, { useEffect, useState } from "react";
import NoticeComponent from "./NoticeComponent";

function TestComponent() {
  const [user, setUser] = useState("sergimolina");
  const modUser = (e) => {
    setUser(e.target.value);
  };
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("charged every time! !");
  });

  useEffect(() => {
    console.log("charged ONLY first time");
  }, []);

  useEffect(() => {
    setContador(contador + 1);
    console.log("user modified " + contador + " times");
  }, [user]);

  return (
    <div>
      <h2>TestComponent (USEEFFECT) </h2>
      <strong className={contador >= 10 ? "label-green" : "label"}>
        {user}
      </strong>
      <form>
        <input type="text" placeholder="name" onChange={modUser} />
      </form>
      {/* {contador >= 20 && <NoticeComponent />} */}
      {user === "sergi" && <NoticeComponent />}
    </div>
  );
}

export default TestComponent;
