import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (tour) => {
    const index = tours.find((x) => x.id === tour.id);
    const newTour = [...tours];
    newTour.splice(index, 1);
    setTours(newTour);
  };

  const handleShow = () => {
    document.querySelector(".text-info").classList.remove("hide");
    document.querySelector(".btn-show").style.display = "none";
    document.querySelector(".btn-hide").style.display = "block";
  };

  const handleHide = () => {
    document.querySelector(".text-info").classList.add("hide");
    document.querySelector(".btn-hide").style.display = "none";
    document.querySelector(".btn-show").style.display = "block";
  };

  const getFetchTour = async () => {
    setLoading(true);
    try {
      const url = "https://course-api.com/react-tours-project";

      const response = await fetch(url);
      const responseJSON = await response.json();

      setLoading(false);
      setTours(responseJSON);
    } catch (error) {
      setLoading(false);
      alert("Loi data");
    }
  };

  useEffect(() => {
    getFetchTour();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2> No tour</h2>
          <button className="btn" onClick={() => getFetchTour()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours
        tourList={tours}
        removeTour={removeTour}
        handleShow={handleShow}
        handleHide={handleHide}
      />
    </main>
  );
}

export default App;
