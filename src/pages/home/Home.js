import React from 'react'
import Chart from '../../components/charts/Chart'
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo'
import './home.css'
import { userData } from '../../userDummyData'
import WidgetLG from '../../components/widgetLG/WidgetLG'
import WidgetSM from '../../components/widgetSM/WidgetSM'

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData} title= "User Analytics blah blah" grid dataKey="Active User"/>
        <div className="homeWidget">
          <WidgetSM/>
          <WidgetLG/>
        </div>
    </div>
  )
}
