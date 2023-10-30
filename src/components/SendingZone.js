import { useContext, useState } from "react";
import { loginContext } from "../App";
import axios from "axios";
import Toast from "./Toast";

function SendingZone(props) {
  const [toast, setToast] = useState({ msg: "", show: false });
  const [msg, setMsg] = useState("");
  const { userId, receiver } = useContext(loginContext);
  const sending = (e) => {
    e.preventDefault(); //$msg_contenu, $msg_expediteur, $msg_destinataire, $msg_reponse
    const data = new FormData();
    data.append("msg_expediteur", userId);
    data.append("msg_destinataire", receiver);
    data.append("msg_contenu", msg);
    const data2 = {
      msg_expediteur: userId,
      msg_destinataire: receiver,
      mail: "aylane",
      msg_contenu: msg,
    };
    axios.post("http://localhost:5000/api/sendmessage", data2).then((res) => {
      // alert(res.data.msg);
      console.log("res.data:", res.data);
      setToast((t) => ({ msg: res.data.msg, show: true }));
      console.log("toast: ", toast);
      setMsg("");
    });
  };
  return (
    <div className=" container-fluid position-fixed bottom-0 mb-2 d-flex align-items-center justify-content-center ">
      <div className=" container rounded-4 border d-flex align-items-center justify-content-center p-4">
        <div className="h4 text-success col-2 p-0">ChatNeuf</div>
        <div className="border-secondary col-10 p-0">
          {/* <img className='card-img-top' alt='Title' /> */}

          <form className="d-flex " onSubmit={(e) => sending(e)}>
            <input
              type="text"
              value={msg}
              className="form-control me-2"
              name="msg"
              onChange={(e) => setMsg(e.target.value)}
            />
            <input
              type="submit"
              className="btn btn-small btn-success "
              value="Send"
            />
          </form>
        </div>
      </div>

      <Toast toast={toast} setToast={setToast} />
    </div>
  );
}

export default SendingZone;
