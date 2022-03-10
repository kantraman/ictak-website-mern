import "./featuredInfo.css";
import {Person , AirplanemodeActiveRounded, AndroidRounded, OfflineBolt } from "@material-ui/icons";
import { useEffect, useState } from "react";
import useToken from '../../Admin/useToken';
import Logout from '../../Admin/logout';

export default function FeaturedInfo() {
  const [stats, setStats] = useState({});
  const { token } = useToken();
  //get stats for tiles
  const getTiles = async () => {
    try {
      const response = await fetch("api/dashboard/tiles", {
        method: "get",
        headers: {
          'x-access-token': token
        }
      });
      if (response.status === 401) {
        Logout();
        return 0;
      }
      if (response.status !== 500) {
        const body = await response.json();
        setStats(body);
      }
    } catch {

    }
  
  }
  useEffect(() => getTiles(), []);

  return (
    <div className="featured">
      <div className="Courses">
        <span className="featuredTitle">Total Courses</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{stats.courses}</span>
          <AirplanemodeActiveRounded fontSize="large" className="featuredIcon" />
        </div>
      </div>
      <div className="Registerations">
        <span className="featuredTitle">Student Registrations</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{stats.courseReg}</span>
          <OfflineBolt fontSize="large" className="featuredIcon" />
        </div>
      </div>
      <div className="Testimonials">
        <span className="featuredTitle">Membership Applications</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{stats.academicReg}</span>
          <AndroidRounded fontSize="large" className="featuredIcon" />
        </div>
      </div>
      <div className="Staffs">
        <span className="featuredTitle">Contact Messages</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{stats.msgs}</span>
          
          <Person fontSize="large" className="featuredIcon" />
          
        </div>
      </div>
    </div>
  );
}
