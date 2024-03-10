import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const trainers = () => {
  return (
    <>
      <div className="carasoul">
        <h3>Our Trainers</h3>
        <div className="carasoul_container">
          <div className="carasoul_item">
            <img src="trainer1.jpg" alt="" />
            <h2>Jaat</h2>
            <div className="train_icons">
              <FaInstagram className="icon" />
              <FaFacebook className="icon" />
              <FaXTwitter className="icon" />
            </div>
          </div>
          <div className="carasoul_item">
            <img src="trainer2.jpg" alt="" id="trainer2_img" />
            <h2>Rajput</h2>
            <div className="train_icons">
              <FaInstagram className="icon" />
              <FaFacebook className="icon" />
              <FaXTwitter className="icon" />
            </div>
          </div>
          <div className="carasoul_item">
            <img src="trainer3.jpg" alt="" id="trainer3_img" />
            <h2>Pandit</h2>
            <div className="train_icons">
              <FaInstagram className="icon" />
              <FaFacebook className="icon" />
              <FaXTwitter className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default trainers;
