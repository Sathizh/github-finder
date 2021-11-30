import React from "react";

export const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div
        className={`container mt-5 p-3 rounded-xl text-xl filter drop-shadow-2xl ${alert.type}`}>
        <i className='fas fa-info-circle ' />
        &nbsp;
        <small className='font-bold  '>{alert.msg}</small>
      </div>
    )
  );
};
export default Alert;
