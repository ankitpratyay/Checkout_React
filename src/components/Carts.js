import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import download from "../image/download (1).jpg";
import { ADD, DLT, REMOVE } from "../redux/action/Action";

export default function Carts() {
  const getdata = useSelector((store) => store.rootReducer.cartReducer.carts);
  const dispatch = useDispatch();
  const send = (element) => {
    dispatch(ADD(element));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };
  const remove = (element) => {
    dispatch(REMOVE(element));
  };
  return (
    <div className="container-fluid mt-2">
      <h2 className="text-center">Cart Page</h2>
      <section className="container mt-3">
        {getdata.length ? (
          <div className="iteamsdetails">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Resturent Name</th>
                </tr>
              </thead>
              <tbody>
                {getdata.map((element, ind) => {
                  return (
                    <tr key={ind}>
                      <td>
                        <img
                          src={element.imgdata}
                          style={{ width: "10rem", height: "10rem" }}
                          alt=""
                        />
                      </td>
                      <td>
                        <p>{element.rname}</p>
                        <p>Address :{element.address}</p>
                        <p>Price: $ {element.price}</p>

                        <div
                          className=" d-flex justify-content-between align-items-baseline"
                          style={{
                            width: 100,
                            cursor: "pointer",
                            color: "#111",
                          }}
                        >
                          <span
                            style={{ fontSize: 24 }}
                            onClick={() => {
                              remove(element);
                            }}
                          >
                            -
                          </span>
                          <span style={{ fontSize: 22 }}>{element.qnty}</span>
                          <span
                            style={{ fontSize: 24 }}
                            onClick={() => send(element)}
                          >
                            +
                          </span>

                          <p
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => dlt(element.id)}
                          >
                            <i className="fas fa-trash mt-10"></i>
                          </p>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="btn-group">
              <NavLink to="/checkout" className=" active" aria-current="page">
                <button type="button" className="btn btn-success">
                  Proceed to checkout
                </button>
              </NavLink>
            </div>
          </div>
        ) : (
          <div
            className="container d-flex flex-column justify-content-center align-items-center "
            style={{ height: "70vh" }}
          >
            <h1 style={{ color: "red" }}>Your cart is Empty</h1>
            <img src={download} alt="cart" />
            <div className="btn-group rounded-pill">
            <NavLink to="/" className=" active" aria-current="page">
              <button type="button" className="btn btn-success">
                Home
              </button>
            </NavLink>
          </div>

          </div>
        )}
      </section>
    </div>
  );
}
