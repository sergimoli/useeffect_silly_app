import React, { useEffect, useState } from "react";
function AjaxComponent() {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");
  const [users, setUsers] = useState([]);
  const getUsersStatics = () => {
    setUsers([
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
    ]);
  };

  const getUsersAjaxPromise = () => {
    fetch("https://reqres.in/api/users?page=1").then((resposta) =>
      resposta.json().then(
        (resultat_final) => {
          setUsers(resultat_final.data);
          console.log(resultat_final.data);
        },
        (error) => {
          console.log(error);
        }
      )
    );
  };

  const getUsersAjaxAsyncAwait = async () => {
    //per veure el el texte 'charging' l'hem posat amb un timeout.
    setTimeout(async () => {
      try {
        const peticio = await fetch("https://reqres.in/api/users?page=1");
        // const peticio = await fetch("https://XXXXXreqres.in/api/users?page=1");
        const { data } = await peticio.json();
        setUsers(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setErrors(error.message);
      }
    }, 500);
  };

  useEffect(() => {
    // getUsersStatics();
    // getUsersAjaxPromise();
    getUsersAjaxAsyncAwait();
  }, []);
  if (errors !== "") {
    return (
      <>
        <p>fuck! there is an error!!!</p>
        <p>{errors}</p>
      </>
    );
  } else if (loading) {
    return <p>Charging...</p>;
  } else if (!loading && errors === "") {
    return (
      <div>
        <h2>List users by Ajax</h2>
        <ol className="users">
          {users.map((user) => {
            return (
              <li key={user.id}>
                <img src={user.avatar} alt={user.id} width="20" />
                {user.first_name}
                {user.last_name}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default AjaxComponent;
