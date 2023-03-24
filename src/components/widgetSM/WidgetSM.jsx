import React from "react";
import "./widgetSm.css";
import {VisibilityOutlined} from '@mui/icons-material';

export default function WidgetSM() {
  return (
    <div className="widgetSM">
      <span className="widgetSMTitle">New Join</span>
      <ul className="widgetSMList">
        <li className="widgetSMListItem">
          <img
            src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="widgetSMImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSMUserName">Anna Karo</span>
            <span className="widgetSMUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSMButton">
                <VisibilityOutlined className="widgetSMIcon"/> Display
          </button>
        </li>
        <li className="widgetSMListItem">
          <img
            src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="widgetSMImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSMUserName">Anna Karo</span>
            <span className="widgetSMUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSMButton">
                <VisibilityOutlined className="widgetSMIcon"/> Display
          </button>
        </li>
        <li className="widgetSMListItem">
          <img
            src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="widgetSMImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSMUserName">Anna Karo</span>
            <span className="widgetSMUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSMButton">
                <VisibilityOutlined className="widgetSMIcon" /> Display
          </button>
        </li>
        <li className="widgetSMListItem">
          <img
            src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="widgetSMImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSMUserName">Anna Karo</span>
            <span className="widgetSMUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSMButton">
                <VisibilityOutlined className="widgetSMIcon"/> Display
          </button>
        </li>
        <li className="widgetSMListItem">
          <img
            src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="widgetSMImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSMUserName">Anna Karo</span>
            <span className="widgetSMUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSMButton">
                <VisibilityOutlined className="widgetSMIcon"/> Display
          </button>
        </li>
      </ul>
    </div>
  );
}
