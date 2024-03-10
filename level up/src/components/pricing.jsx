import { FaDollarSign } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
function Pricing() {
  return (
    <div class="carasoul">
      <div class="carasoul_container">
        <div class="carasoul_item">
          <h1>Trial Plan </h1>
          <div className="icons">
            <FaDollarSign /> 0
          </div>
          <div className="para_conatiner">
            <TiTick id="pp1_icon" />
            <p id="p1">Daily complementry session with the personal trainer</p>
            <RxCross2 id="p2_icon" />
            <p id="p2">Access to gym facilities during optional hours</p>
            <RxCross2 id="p3_icon" />
            <p id="p3">Acess to all room</p>
            <RxCross2 id="p4_icon" />
            <p id="p4">use of advance gym equipment</p>
          </div>
          <button>Buy Plan</button>
        </div>
        <div class="carasoul_item">
          <div className="icons">
            <FaDollarSign /> 1000
          </div>
          <h1>Gold Plan </h1>

          <div className="para_conatiner">
            <TiTick id="pp1_icon" />
            <p id="p1">Daily complementry session with the personal trainer</p>
            <TiTick id="p2l2_icon" />
            <p id="p2">Access to gym facilities during optional hours</p>
            <RxCross2 id="p3_icon" />
            <p id="p3">Acess to all room</p>
            <RxCross2 id="p4_icon" />
            <p id="p4">use of advance gym equipment</p>
          </div>

          <button>Buy Plan</button>
        </div>
        <div class="carasoul_item">
          <div className="icons">
            <FaDollarSign /> 2000
          </div>
          <h1>Platinum Plan </h1>

          <div className="para_conatiner">
            <TiTick id="pp1_icon" />
            <p id="p1">Daily complementry session with the personal trainer</p>
            <TiTick id="p3l2_icon" />
            <p id="p2">Access to gym facilities during optional hours</p>
            <TiTick id="p3l3_icon" />
            <p id="p3">Acess to all room</p>
            <TiTick id="p3l4_icon" />
            <p id="p4">use of advance gym equipment</p>
          </div>
          <button>Buy Plan</button>
        </div>
      </div>
    </div>
  );
}
export default Pricing;
