import "./Home.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <header id="hero">
        <div className="container hero-inner">
          <div className="heading animated fadeIn">
            <h1>Start driving your credit.</h1>
            <p className="lead py-1">
              No Appointments, no obligation and free to apply. Are you looking
              for a new car?
            </p>
            <Link to="/" className="btn-apply-light">
              Get a car now
            </Link>
          </div>

          <div className="car animated fadeIn">
            <img src={"hero-car.svg"} alt="car" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
