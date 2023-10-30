import React from "react";

const MenuV = (props) => {
  const id = props.Id ? props.Id : "id";
  return (
    <div>
      <button
        className=' btn btn-bd-primary  h1 position-fixed start-0 bottom-50 rounded-start-0 fs-1 rounded-end-circle'
        style={{ height: "70px", width: "40px" }}
        type='button'
        data-bs-toggle='offcanvas'
        data-bs-target={"#" + id}
        aria-controls='offcanvasWithBothOptions'
      >
        {">"}
      </button>
      <div
        className='offcanvas offcanvas-start show text-bg-secondary'
        data-bs-scroll='true'
        tabIndex='-1'
        id={id}
        aria-labelledby={id}
      >
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title' id={id}>
            <div className='py-2 text-danger rounded-5 d-flex justify-content-center'>
              <div
                className=' rounded-circle bg-danger mx-1 '
                style={{ height: "30px", width: "30px" }}
              >
                {" "}
              </div>{" "}
              <div className=' text-center ms-2'> Syfax</div>
            </div>
          </h5>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body'>
          <ul className='list-group'>
            <li className='list-group-item list-group-item-action list-group-item-primary active'>
              Nouveau Forum
            </li>
            <li className='list-group-item list-group-item-action list-group-item-primary'>
              Nouvelle Discussion
            </li>
            <li className='list-group-item list-group-item-action list-group-item-primary '>
              Déconnecter
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuV;
