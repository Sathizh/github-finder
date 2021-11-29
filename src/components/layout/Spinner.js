import React, { Fragment } from "react";
import spinner from "./spinner.gif";
export const Spinner = () => (
  <Fragment>
    <img src={spinner} alt='Loading...' className='w-30 m-auto block' />
  </Fragment>
);
export default Spinner;
