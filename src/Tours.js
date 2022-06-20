import React from "react";
import Tour from "./Tour";

function Tours({ tourList, removeTour, handleShow, handleHide }) {

  return (
    <section>
      <div className="title">
        <h2>Our Tour</h2>
        <div className="underline"></div>
      </div>
      <ul>
        {tourList.map((tour) => (
          <li className="single-tour" key={tour.id}>
            <Tour Tour ={tour}  removeTour={removeTour} handleShow ={handleShow} handleHide ={handleHide} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tours;
