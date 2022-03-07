import "./featuredInfo.css";
import {Person , AirplanemodeActiveRounded, AndroidRounded, OfflineBolt } from "@material-ui/icons";
export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="Courses">
        <span className="featuredTitle">Courses</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">8</span>
             <AirplanemodeActiveRounded fontSize="large" className="featuredIcon"/>
        </div>
      </div>
      <div className="Registerations">
        <span className="featuredTitle">Registrations</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">32</span>
             <OfflineBolt fontSize="large" className="featuredIcon"/>
        </div>
      </div>
      <div className="Testimonials">
        <span className="featuredTitle">Testimonials</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">29</span>
             <AndroidRounded fontSize="large" className="featuredIcon"/>
        </div>
      </div>
      <div className="Staffs">
        <span className="featuredTitle">Staffs</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">20</span>
          
             <Person fontSize="large" className="featuredIcon"/>
          
        </div>
      </div>
    </div>
  );
}
