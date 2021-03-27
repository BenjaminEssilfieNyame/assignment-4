import { Link } from "react-router-dom";

const InventoryItems = () => {
  return (
    <div className="boxes py-3">
      <div className="box">
        <div className="vehicle">
          <img src="img/svg/car.svg" alt="" />
        </div>
        <div className="description">
          <h1>Cars</h1>
          <p className="">
            From fuel efficient commuters to high powered sports cars and luxury
            sedans, we can help you find the perfect car for your situation.
          </p>
          <Link to="/" className="btn-apply-dark">
            Apply now
          </Link>
        </div>
      </div>

      <div className="box">
        <div className="vehicle">
          <img src="img/svg/minivan.svg" alt="" />
        </div>
        <div className="description">
          <h1>Minivans</h1>
          <p className="">
            With seating for up to 7 and plenty of room for whatever you may
            need to transport, a minivan makes the perfect family vehicle.
          </p>
          <Link to="/" className="btn-apply-dark">
            Apply now
          </Link>
        </div>
      </div>

      <div className="box">
        <div className="vehicle">
          <img src="img/svg/truck.svg" alt="" />
        </div>
        <div className="description">
          <h1>Trucks</h1>
          <p className="">
            Need to haul a trailer, just like helping your friends move? Our
            dealers carry a wide variety of midsize and full-size trucks from
            various manufacturers.
          </p>
          <Link to="/" className="btn-apply-dark">
            Apply now
          </Link>
        </div>
      </div>

      <div className="box">
        <div className="vehicle">
          <img src="img/svg/suv.svg" alt="" />
        </div>
        <div className="description">
          <h1>SUVs</h1>
          <p className="">
            Looking for something suitable for city driving, but still want that
            off-road capability? Let us help you get into the perfect SUV.
            Compact to full-size, we have it!
          </p>
          <Link to="/" className="btn-apply-dark">
            Apply now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InventoryItems;
