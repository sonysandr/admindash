import React from "react";
import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="johnnakatomi" />
        </div>
        <div className="newUserItem">
          <label>Full name</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="johndoe42@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+91 12133434356" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Mumbai" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGenderContainer">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="others" value="others" />
            <label for="others">Others</label>
          </div>
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input type="select" placeholder="Male" />
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
