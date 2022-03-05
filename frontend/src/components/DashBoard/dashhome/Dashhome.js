import React from 'react';
import './dashhome.css';
import { userData } from "../dashboard/dummyData";
import WidgetSm from "../widgetSm/WidgetSm";
import FeaturedInfo from '../featuredInfo/FeaturedInfo'
import  Chart  from '../chart/Chart';

function Dashhome(props) {
    return (
        <div className="Dashhome">
      <FeaturedInfo />
      <div className='Charts'>
      <Chart data={userData} />
      <WidgetSm/>
      </div>
    </div>
    );
}

export default Dashhome;