import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Review() {
  const getAdd = useSelector((store) => store.rootReducer.cartReducer.address);
  const getRest = useSelector((store) => store.rootReducer.cartReducer.carts);
  console.log(getAdd);
  return (
    <div className="container-fluid mt-2 align-item-between">
      <h2 className="text-center">Review Page</h2>
      <div className="row d-flex flex-row align-item-between">
        <section className="col-md-4 order-md-2 mb-4">
          <div className="iteamsdetails">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Resturent Name</th>
                </tr>
              </thead>
              <tbody>
                {getRest.map((element, ind) => {
                  return (
                    <tr key={ind}>
                      <td>
                        <img
                          src={element.imgdata}
                          style={{ width: "8rem", height: "8rem" }}
                          alt=""
                        />
                      </td>
                      <td>
                        <p>{element.rname}</p>
                        <p>Address :{element.address}</p>
                        <p>Price: $ {element.price}</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
        <div className="col-md-8 order-md-2 ">
          <h4 className="mb-3">Shipping Address</h4>
          {getAdd.map((element,ind) => {
            return (
              <table key={ind} className="table table-borderless row g-3">
                <thead>
                  <tr>
                    <th className="text-muted">Name :</th>
                    <td >
                      {element.Fname} {element.Lname}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-muted">Email :</th>
                    <td>{element.email}</td>
                  </tr>
                  <tr>
                    <th className="text-muted">Address :</th>
                    <td>
                      {element.address},{element.city},{element.state}, Pin-
                      {element.zip}
                    </td>
                  </tr>
                </thead>
              </table>
            );
          })}
          <h4 className="mb-3">Payment</h4>
          {getAdd.map((element, ind) => {
            return (
              <table key={ind} className="table table-borderless">
                <thead>
                  <tr>
                    <th className="text-muted">Name :</th>
                    <td>{element.fullname}</td>
                  </tr>
                  <tr>
                    <th className="text-muted">Card No :</th>
                    <td>{element.card}</td>
                  </tr>
                </thead>
              </table>
            );
          })}
        </div>
      </div>
      <div className="btn-group ">
      <NavLink to="/success" className=" active" aria-current="page">
        <button type="button" className="btn btn-success">
          Continue
        </button>
      </NavLink>
    </div>
    </div>
  );
}
