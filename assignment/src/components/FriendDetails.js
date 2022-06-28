import React, { useState, useEffect } from "react";
import { Routes, Route, useParams,useNavigate, Link } from "react-router-dom";
import axios from "axios";

function FriendDetails() {
  const [user, setUser] = useState([0]);
  
  useEffect(() => {
    axios
      .get(`http://private-5bdb3-friendmock.apiary-mock.com/friends/id`)
      .then((response) => {
        setUser(response.data);
      });
  }, []);
  if (!user) return null;
  // const back = useNavigate();
  // const goToHome = () => {
  //   back("/");
  // };

  return (
    <div>
      <h2>Details of Friends</h2>
      <Link to ="/list">Go TO Home Page</Link>
      <ul key={user.id}>
        <li>FirstName : {user.first_name}</li>
        <li>Last Name : { user.last_name}</li>
        <li>Phone : {user.phone}</li>
        <li>Address : {user.address_1}</li>
        <li>City : {user.city}</li>
        <li>State : {user.state}</li>
        <li>ZipCode : {user.zipcode}</li>
        <li> bio : {user.bio}</li>
        <li> Statuses :  {user.statuses}</li>
      </ul>
    </div>
  );
}
export default FriendDetails;
