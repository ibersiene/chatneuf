import React, { useState, useEffect, useContext } from "react";
import SendingZone from "./SendingZone";
import axios from "axios";
import { loginContext } from "../App";
function Discussion() {
  const { userId, pseudo, receiver } = useContext(loginContext);
  const afficherListeMessage = (userId, receiver) => {
    const data = { msg_expediteur: userId, msg_destinataire: receiver }; //,

    axios.get("http://localhost:5000/api/message", data).then((res) => {
      console.log("res.data:", res.data);
      setMessages(
        res.data.map((outb, index) => (
          <div className="d-flex justify-content-start mt-2" key={index}>
            {outb.mail}
            <hr />
            {outb.pwd}
            {outb.message.map((outbmessage, indexmessage) => (
              <div key={indexmessage}>
                <div className="pt-2 px-3 fs-6 rounded-end-5 rounded-top-5 text-bg-danger">
                  {" "}
                  {outbmessage.contenu}
                </div>
                <small className="mt-4 text-secondary">
                  {outbmessage.dest}({outbmessage.vu}){"<-->"}(
                  {outbmessage.date})
                </small>
              </div>
            ))}
          </div>
        ))
      );
    });
  };
  const [messages, setMessages] = useState("Messages list loading...");
  useEffect(() => {
    afficherListeMessage(userId, receiver);
  }, [receiver]);

  return (
    <div
      style={{ marginTop: "100px", maxHeight: "450px", marginBottom: "100px" }}
      className=" container border overflow-auto"
    >
      <div>{messages}</div>
    </div>
  );
}
export default Discussion;
