import React from "react";
import "./Users.css";
import User from "./User";
import { useSelector } from "react-redux";

const Userslist = () => {
  const users = useSelector((state) => state.usersreducer);
  console.log(users)
  //   "_id":"u12345",
  //   "name":"Vishwa",
  //   "email":"vishwa@gmail.com",
  //   "password":"ogfjdfklmg",
  //   "about":"sdfhnkj kdgfkld",
  //   "tags":["dfjg","djfgnkd","jdfhndk"],
  //   "answered":10,
  //   "joinedon":"2024-06-10T08:00:00Z"
  // }]
  

  return (
    <div className="user-list-container">
      {users.map((user) => (
        <User user={user} key={user?._id}/>
      ))}
    </div>
  )
}

export default Userslist