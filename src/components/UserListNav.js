import React, {
  useState,
  useEffect,
  useContext,
  useSyncExternalStore,
} from "react";

import axios from "axios";
import { loginContext } from "../App";

const UserListNav = () => {
  const { setReceiver, receiver } = useContext(loginContext);
  const [receiverActuel, setReceiverActuel] = useState(0);
  const [userIds, setUserIds] = useState([]);
  const [listDiscussion, setlistDiscussion] = useState("chargement...");
  const afficherListeDiscussion = () => {
    axios.get("http://localhost:5000/api/message").then((res) => {
      console.log("res.data:", res);
      setUserIds(res.data.users);
      console.log("userIds", userIds);
      setlistDiscussion(
        res.data.nb_row > 0 ? (
          res.data.users.map((outb, index) => (
            <li
              value={outb.user_id}
              role="button"
              className={
                receiver === outb.user_id
                  ? "list-group-item list-group-item-action list-group-item-primary active"
                  : "list-group-item list-group-item-action list-group-item-primary"
              }
              key={outb.user_id}
              onClick={(e) => {
                e.preventDefault();
                setReceiver(outb.user_id);
                alert("index :" + index + " outb.user_id :" + outb.user_id);
                console.log("className ", e.target.className);
                // console.log("key ", e.target.key);
                console.log("value ", e.target.value);
              }}
            >
              {outb.mail}
            </li>
          ))
        ) : (
          <li className="list-group-item list-group-item-action list-group-item-primary ">
            Aucune discussion à Afficher
          </li>
        )
      );
    });
  };
  useEffect(() => {
    afficherListeDiscussion();
  }, []);
  return (
    <div
      style={{
        marginTop: "100px",

        maxHeight: "450px",
        marginBottom: "100px",
      }}
      className="ms-2 text-center text-info bg-white-subtle  "
    >
      {" "}
      Mes Amis
      <ul className=" mt-2 list-group">
        {listDiscussion}
        <li
          role="button"
          className={
            receiverActuel == 7
              ? "list-group-item list-group-item-action list-group-item-primary active"
              : "list-group-item list-group-item-action list-group-item-primary"
          }
          key={7}
          onClick={(e) => {
            e.preventDefault();
            setReceiver(7);
            setReceiverActuel(7);
          }}
        >
          Sept
        </li>
      </ul>
    </div>
  );
};

export default UserListNav;
