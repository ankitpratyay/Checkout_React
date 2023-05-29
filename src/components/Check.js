import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADD, ADDRESS, DLT, REMOVE } from "../redux/action/Action";

export default function Check() {
  const initialState = {
    Fname: "",
    Lname: "",
    state: "",
    email: "",
    city: "",
    zip: "",
    address: "",
    fullname: "",
    cvv: "",
    expiry: "",
    SFname: "",
    SLname: "",
    Sstate: "",
    Scity: "",
    Szip: "",
    Saddress: "",
  };
  const [customer, setCustomer] = useState(initialState);
  const [price, setPrice] = useState(0);
  const [check, setCheck] = useState(false);
  const getData = useSelector((store) => store.rootReducer.cartReducer.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(ADDRESS(customer));
    navigate("/review");
  }
  function handleChange(event) {
    setCustomer(values =>({ ...values, [event.target.name]: event.target.value }));
  }
  const dlt = (id) => {
    dispatch(DLT(id));
  };
  const navigation = () => {
    navigate("/cart");
  };
  const total = () => {
    let temp = 0;
    getData.map((ele) => {
      temp = temp + ele.price * ele.qnty;
    });
    setPrice(temp);
  };
  useEffect(() => {
    if (getData.length === 0) {
      navigation();
    }
    total();
  }, [getData]);

  const send = (element) => {
    dispatch(ADD(element));
  };
  const remove = (element) => {
    dispatch(REMOVE(element));
  };
  return (
    <div className="container mt-3">
      <div className="row d-flex flex-row align-item-center">
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
                      <div
                        className="mt-4 d-flex justify-content-between align-items-baseline"
                        style={{ width: 100, cursor: "pointer", color: "#111" }}
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
                          <i className="fas fa-trash"></i>
                        </p>
                      </div>
                    </td>
                  </tr>
                );
              })}
              <strong>Total :$ {price} </strong>
            </tbody>
          </table>
        </div>

        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Shipping Address</h4>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <label htmlFor="validationDefault01" className="form-label">
                First name
              </label>
              <input
                type="text"
                name="Fname"
                placeholder="First Name"
                className="form-control"
                id="validationDefault01"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="validationDefault02" className="form-label">
                Last name
              </label>
              <input
                type="text"
                name="Lname"
                className="form-control"
                placeholder="Last Name"
                id="validationDefault02"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="validationDefaultUsername" className="form-label">
                Email
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="abc@xyz.com"
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
              <label htmlFor="validationDefault03" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                name="address"
                id="validationDefault03"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault03" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                placeholder="City"
                name="city"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-3">
              <label htmlFor="validationDefault04" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="State"
                id="validationDefault03"
                name="state"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="validationDefault05" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Pin"
                id="validationDefault05"
                pattern="[0-9]{5}"
                name="zip"
                onChange={handleChange}
                required
              />
            </div>

            <hr className="mb-2" />
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value="false"
                onChange={() => setCheck(!check)}
                id="same-address"
              />
              <label className="form-check-label" htmlFor="same-address">
                Billing address is the same as my Shipping address
              </label>
            </div>

            <h4 className="mb-2">Billing Address</h4>
            <div className="col-md-4">
              <label htmlFor="validationDefault06" className="form-label">
                First name
              </label>
              <input
                type="text"
                name="SFname"
                className="form-control"
                id="validationDefault06"
                autoComplete="{false}"
                onChange={handleChange}
                value= {check ? customer.Fname : customer.SFname}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="validationDefault07" className="form-label">
                Last name
              </label>
              <input
                type="text"
                name="SLname"
                className="form-control"
                id="validationDefault07"
                value={check ? customer.Lname : customer.SLname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="validationDefault08" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                name="Saddress"
                id="validationDefault08"
                value={check ? customer.address : customer.Saddress}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault09" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault09"
                name="Scity"
                value={check ? customer.city : customer.Scity}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-3">
              <label htmlFor="validationDefault10" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault10"
                name="Sstate"
                value={check ? customer.state : customer.Sstate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="validationDefault11" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                name="Szip"
                id="validationDefault11"
                pattern="[0-9]{5}"
                value={check ? customer.zip : customer.Szip}
                onChange={handleChange}
                required
              />
            </div>
            <hr className="mb-4" />
            <h4 className="mb-3">Payment</h4>
            <div className="col-md-4">
              <label htmlFor="validationDefault01" className="form-label">
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
              <label htmlFor="validationDefault01" className="form-label">
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
              <label htmlFor="validationDefault01" className="form-label">
                Expiry (mm/yy)
              </label>
              <input
                type="text"
                name="expiry"
                pattern="([0-9]{2}[/]?){2}"
                className="form-control"
                id="validationDefault01"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-1">
              <label htmlFor="validationDefault01" className="form-label">
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
                <label className="form-check-label" htmlFor="invalidCheck2">
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
