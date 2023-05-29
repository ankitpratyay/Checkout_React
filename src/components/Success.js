import '../App.css'
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { COMPPAYMENT } from "../redux/action/Action";
import { useDispatch } from "react-redux";
export default function Success() {
  const dispatch = useDispatch();
  const dlt = () => {
    dispatch(COMPPAYMENT());
  };
  useEffect(() => {
    dlt();
  }, []);

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">

        <div className="mb-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-success" width="75" height="75"
                fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path
                    d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
        </div>
        <div className="text-center">
            <h1>Thank You !</h1>
            <p>We will send you The confirmation mail soon !!</p>
            <NavLink to="/" className=" active" aria-current="page">
            <button className="btn btn-outline-success">Back Home</button>
            </NavLink>
        </div>
    </div>
  );
}
