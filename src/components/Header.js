import React, { useContext } from "react";
import { loginContext } from "../App";
const Header = () => {
  const { pseudo, userId, receiver, setReceiver } = useContext(loginContext);
  return (
    <div className='w-100 position-fixed top-0 px-4 text-center bg-light py-3 h4 d-flex justify-content-between align-items-center border-bottom border-success border-bottom-4  '>
      <div className='col-3 py-2 text-danger rounded-5  d-flex justify-content-center'>
        <div
          className=' rounded-circle bg-danger mx-1 '
          style={{ height: "40px", width: "40px" }}
        >
          {" "}
        </div>{" "}
        <div className=' text-center ms-2'> {pseudo + "(" + userId + ")"}</div>
      </div>
      <div
        role='button'
        className='col-3 h2 text-dark '
        onClick={() => {
          const r = receiver;
          setReceiver(0);
          setReceiver(r);
        }}
      >
        {"(^_^)"}
      </div>
      <div className='col-3 py-2 text-primary rounded-5  d-flex justify-content-center'>
        <div
          className=' rounded-circle bg-primary mx-1 '
          style={{ height: "40px", width: "40px" }}
        >
          {" "}
          #{" "}
        </div>{" "}
        <div className=' text-center text-primary ms-2'>
          {" "}
          <div>
            <select
              value={receiver}
              className='form-select text-primary'
              onChange={(e) => {
                e.preventDefault();
                e.target.value && setReceiver(e.target.value);
              }}
            >
              <option value={0}>User</option>
              <option value={2}>Aylane</option>
              <option value={3}>Moi</option>

              <option value={4}>Toi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
