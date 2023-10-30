import Discussion from "./components/Discussion";
import Header from "./components/Header";
import MenuV from "./components/MenuV";
import SendingZone from "./components/SendingZone";
import { createContext, useState } from "react";
import UserListNav from "./components/UserListNav";
export const loginContext = createContext();
function App() {
  const [pseudo, setPseudo] = useState("Syfax");
  const [userId, setUserId] = useState(1);
  const [receiver, setReceiver] = useState(2);
  return (
    <loginContext.Provider value={{ pseudo, userId, receiver, setReceiver }}>
      <div className='h-100'>
        <MenuV Id='MenuV' />

        <Header />
        <div className='  d-flex'>
          <div className=' container col-10'>
            <Discussion />
          </div>
          <div className=' container'>
            <UserListNav />
          </div>
        </div>

        <SendingZone />
      </div>
    </loginContext.Provider>
  );
}

export default App;
