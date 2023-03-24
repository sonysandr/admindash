import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  StoreOutlined,
  PaidOutlined,
  AssessmentOutlined,
  MailOutlineOutlined,
  FeedbackOutlined,
  AlternateEmailOutlined,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">DASHBOARD</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <LineStyle className="sidebarIcon" /> Home
            </li>
            <li className="sidebarListItem ">
              <Timeline className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" /> Sales
            </li>
          </ul>
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Person className="sidebarIcon" /> Users
            </li>
            <li className="sidebarListItem ">
              <StoreOutlined className="sidebarIcon" /> Products
            </li>
            <li className="sidebarListItem">
              <PaidOutlined className="sidebarIcon" />
              Transaction
            </li>
            <li className="sidebarListItem">
              <AssessmentOutlined className="sidebarIcon" />
              Reports
            </li>
          </ul>
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <AlternateEmailOutlined className="sidebarIcon" /> Mail
            </li>
            <li className="sidebarListItem ">
              <FeedbackOutlined className="sidebarIcon" /> Feedback
            </li>
            <li className="sidebarListItem">
              <MailOutlineOutlined className="sidebarIcon" /> Messages
            </li>
          </ul>
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <LineStyle className="sidebarIcon" /> Manage
            </li>
            <li className="sidebarListItem ">
              <Timeline className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <AssessmentOutlined className="sidebarIcon" /> Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
