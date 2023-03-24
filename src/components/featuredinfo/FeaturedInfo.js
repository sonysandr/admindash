import React from 'react'
import './featuredinfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <div className="featuredMoney">$ 4,3455</div>
                <div className="featuredMoneyRate"> -22 <ArrowDownward className='featuredIcon negative'/></div>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <div className="featuredMoney">$ 2,3455</div>
                <div className="featuredMoneyRate"> +234 <ArrowUpward className='featuredIcon'/></div>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <div className="featuredMoney">$ 2,3455</div>
                <div className="featuredMoneyRate"> +234 <ArrowUpward className='featuredIcon negative'/></div>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        
    </div>
  )
}
