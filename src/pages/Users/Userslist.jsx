import React from 'react'
import './Users.css'
import User from './User'

const Userslist = () => {
    const users=[{
        "_id":"u12345",
        "name":"John Doe",
        "email":"john@gmail.com",
        "password":"securepassword123",
        "about":"Software Developer with a passion for open-source projects and algorithms.",
        "tags":["Javascript","Python","Open-Source"],
        "answered":10,
        "joinedon":"2024-06-10T08:00:00Z"
    },
    {
        "_id":"u54321",
        "name":"Jane",
        "email":"jane@gmail.com",
        "password":"mypassword123",
        "about":"Data Scientist with a passion for open-source projects and algorithms.",
        "tags":["Machine Learning","Python", "Data Science"],
        "answered":25,
        "joinedon":"2024-06-10T09:00:00Z"
    },
    {
        "_id":"u67890",
        "name":"Alice",
        "email":"alice@gmail.com",
        "password":"anotherpassword123",
        "about":"Frontend Developer with a passion for open-source projects and algorithms.",
        "tags":["React", "JavaScript", "Web Performance"],
        "answered":15,
        "joinedon":"2024-06-10T10:00:00Z"
    }]
  return (
    <div className="user-list-container">
        {users.map((user)=>(
            <User user={user} key={user?._id}/>
        ))}
    </div>
  )
}

export default Userslist