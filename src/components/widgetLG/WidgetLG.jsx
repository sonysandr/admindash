import React from "react";
import "./widgetLg.css";

export default function WidgetLG() {
  const Button = ({ type }) => {
    return <button className={"widgetLGButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLG">
      <h3 className="widegetLGTitle">Latest transactions</h3>
      <table className="widgetLGTable">
        <tr className="widgetLGTr">
          <th className="widgetLGTh">Customer</th>
          <th className="widgetLGTh">Date</th>
          <th className="widgetLGTh">Amount</th>
          <th className="widgetLGTh">Status</th>
        </tr>
        <tr className="widgetLGTr">
          <td className="widgetLGUser">
            <img
              src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="user"
              className="widgetLGImg"
            />
            <span className="widgetLGName">Susan </span>
          </td>

          <td className="widgetLGDate">2 june 2022</td>
          <td className="widgetLGAmount">$ 32323</td>
          <td className="widgetLGStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLGTr">
          <td className="widgetLGUser">
            <img
              src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="user"
              className="widgetLGImg"
            />
            <span className="widgetLGName">Cherie </span>
          </td>

          <td className="widgetLGDate">2 june 2022</td>
          <td className="widgetLGAmount">$ 32323</td>
          <td className="widgetLGStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLGTr">
          <td className="widgetLGUser">
            <img
              src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="user"
              className="widgetLGImg"
            />
            <span className="widgetLGName">Angel </span>
          </td>

          <td className="widgetLGDate">2 june 2022</td>
          <td className="widgetLGAmount">$ 32323</td>
          <td className="widgetLGStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLGTr">
          <td className="widgetLGUser">
            <img
              src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="user"
              className="widgetLGImg"
            />
            <span className="widgetLGName">John </span>
          </td>

          <td className="widgetLGDate">2 june 2022</td>
          <td className="widgetLGAmount">$ 32323</td>
          <td className="widgetLGStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLGTr">
          <td className="widgetLGUser">
            <img
              src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="user"
              className="widgetLGImg"
            />
            <span className="widgetLGName">Sasi </span>
          </td>

          <td className="widgetLGDate">2 june 2022</td>
          <td className="widgetLGAmount">$ 32323</td>
          <td className="widgetLGStatus">
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
}
