import React, { useState } from "react";
import CardsData from "./CardsData";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/action/Action";
export default function Products() {
  const [data, setData] = useState(CardsData);

  const dispatch = useDispatch();
  //const getdata = useSelector((store) => store.rootReducer);
  const send = (element) => {
    dispatch(ADD(element));
  };
  return (
    <div className="container mt-3">
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((ele, id) => {
          return (
            <div
              kry={id}
              className="card mx-2 mt-4 card_style"
              style={{ width: "22rem", border: "none" }}
              key={id}
            >
              <img
                className="card-img-top mt-3"
                src={ele.imgdata}
                alt="Card cap"
                style={{ height: "16rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">{ele.rname}</h5>
                <p className="card-text">Price : $ {ele.price}</p>
                <div className="button_div d-flex justify-content-center ">
                  <button
                    type="button"
                    onClick={() => send(ele)}
                    className="btn btn-outline-secondary col-lg-12"
                    style={{ cursor: "pointer" }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
