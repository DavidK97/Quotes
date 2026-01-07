import { useState, useEffect } from "react";
import facade from "../../apiFacade";

function LoggedIn({ loggedIn, username, roles}) {
  const [dataFromServer, setDataFromServer] = useState("Loading...");

  useEffect(() => {
    //const promise = facade.fetchData("protected/admin_demo/");
    //promise.then((data) => setDataFromServer(data));
  }, []);

  return (
    <div>
      <h3>{dataFromServer.msg}</h3>
      <h3>{"Hej: " + username}</h3>
    </div>
  );
}
export default LoggedIn;
