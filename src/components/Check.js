import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADD, DLT, REMOVE } from "../redux/action/Action";

export default function Check() {
  const initialState = {
    Fname: "",
    Lname: "",
    state: "",
    email: "",
    address: "",
    country: "",
    fullname: "",
    cvv: "",
    expiry: "",
  };
  const [customer, setCustomer] = useState(initialState);
  const [price, setPrice] = useState(0);
  const getData = useSelector((store) => store.rootReducer.cartReducer.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    navigate("/success");
  }
  function handleChange(event) {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
    console.log(customer);
  }
  const dlt = (id) => {
    dispatch(DLT(id));
  };
  const navigation = () => {
    navigate("/cart");
  };
  useEffect(() => {
    if (getData.length === 0) {
      navigation();
    }
    total();
  }, [getData]);
  const total = () => {
    let temp = 0;
    getData.map((ele) => {
      temp = temp + ele.price * ele.qnty;
    });
    setPrice(temp);
  };
  const send = (element) => {
    dispatch(ADD(element));
  };
  const remove=(element)=>{
    dispatch(REMOVE(element))
  }
  return (
    <div className="container">
      <div className="row d-flex align-item-center">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Resturent Name</th>
              </tr>
            </thead>
            <tbody>
              {getData.map((element, ind) => {
                return (
                  <tr key={ind}>
                    <td>
                      <img
                        src={element.imgdata}
                        style={{ width: "5rem", height: "5rem" }}
                        alt=""
                      />
                    </td>
                    <td>
                      <p>{element.rname}</p>
                      <p>Price: $ {element.price}</p>
                      <p>Quantity: {element.qnty}</p>
                      <div className="mt-4 d-flex justify-content-between align-items-center" style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                      <span style={{fontSize:24}} onClick={()=>{remove(element)}} >-</span>
                      <span style={{fontSize:22}}>{element.qnty}</span>
                      <span style={{fontSize:24}} onClick={()=>send(element)}>+</span>
                    </div>
                      <p
                        style={{
                          color: "red",
                          fontSize: 20,
                          cursor: "pointer",
                        }}
                        onClick={() => dlt(element.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </p>
                    </td>
                  </tr>
                );
              })}
              <p>Total :$ {price} </p>
            </tbody>
          </table>
        </div>

        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <label for="validationDefault01" className="form-label">
                First name
              </label>
              <input
                type="text"
                name="Fname"
                className="form-control"
                id="validationDefault01"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label for="validationDefault02" className="form-label">
                Last name
              </label>
              <input
                type="text"
                name="Lname"
                className="form-control"
                id="validationDefault02"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label for="validationDefaultUsername" className="form-label">
                Email
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                  name="email"
                  id="validationDefaultUsername"
                  aria-describedby="inputGroupPrepend2"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-12">
              <label for="validationDefault03" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                name="address"
                id="validationDefault03"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label for="validationDefault03" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                name="city"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-3">
              <label for="validationDefault04" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                name="state"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3">
              <label for="validationDefault05" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault05"
                pattern="[0-9]{5}"
                name="zip"
                onChange={handleChange}
                required
              />
            </div>

            <hr className="mb-4" />
            <h4 className="mb-3">Payment</h4>
            <div className="col-md-4">
              <label for="validationDefault01" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                className="form-control"
                id="validationDefault01"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label for="validationDefault01" className="form-label">
                Card Number
              </label>
              <input
                type="text"
                name="card"
                pattern="[0-9]{16}"
                className="form-control"
                id="validationDefault01"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-2">
              <label for="validationDefault01" className="form-label">
                Expiry
              </label>
              <input
                type="text"
                name="expiry"
                pattern="[0-9]{4}"
                className="form-control"
                id="validationDefault01"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-1">
              <label for="validationDefault01" className="form-label">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                pattern="[0-9]{3}"
                className="form-control"
                id="validationDefault01"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck2"
                  required
                />
                <label className="form-check-label" for="invalidCheck2">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
