import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <div className="head_container">
        <div className="header1_conatiner">
          <p>Level Up Gym</p>
        </div>
        <div className="header2_conatiner">
          <Link to="/">Home</Link>
          <Link to="/about_us">About Us</Link>
          <Link to="/pricing_plan">Pricing Plans</Link>
          <Link to="/tainers">Trainers</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </>
  );
};
export default header;
