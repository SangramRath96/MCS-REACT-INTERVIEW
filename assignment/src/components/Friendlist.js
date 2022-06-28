import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function FriendList() {
  const [friends, setFriends] = useState([]);

  const getFriends = async () => {
    try {
      const response = await fetch(
        "http://private-5bdb3-friendmock.apiary-mock.com/friends"
      );

      setFriends(await response.json());
    } catch (error) {
      console.log("my error is " + error);
    }
  };

  useEffect(() => {
    getFriends();
  }, []);
  return (
    <div className="App">
      <h2>List Of Friends</h2>

      {friends.map((curElem) => {
        const { id, img, first_name, last_name, status, available } = curElem;
        return (
          <div className="card" key={id}>
            <div>
              <div className="image">
                {" "}
                <img src={img} className="rounded" width="155" />{" "}
              </div>
              <div className="title">
                <h4>First Name:{first_name} </h4>

                <div className="title">
                  <h4>Last Name:{last_name} </h4>
                  <div className="title">
                    <h4>Status:{status} </h4>
                    <div className="title">
                      <h4>Availabilty:{available} </h4>
                    </div>
                    <span className="text-left">{available}</span>
                    <Link to={`/details/${id}`} className="button-7">
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FriendList;
