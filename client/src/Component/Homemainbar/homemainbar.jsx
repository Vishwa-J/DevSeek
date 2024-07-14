import React from 'react'
import './Homemainbar.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Questionlist from './Questionlist'

function Homemainbar() {
    const user=1;
    const location=useLocation();
    const navigate=useNavigate();
    const questionlist=[{
        _id:"q1",
        questiontitle:"How to implement binary search hghjb",
        questionbody:"I am trying to implementjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
        questiontags:["Python","Mern"],
        noofanswers:2,
        upvote:["user123","user456"],
        downvote:["user789"],
        userposted:"codeNewbie",
        userid:"u12345",
        askedon:"2024-06-10T12:00:00Z",
        answer:[
            {
                answerbody:"Here's a simple example",
                useranswered:"algoexpert",
                userid:"u67890",
                answeredon:"2024-06-10T13:00:00Z"
            },
            {
                answerbody:"To add to the previous one",
                useranswered:"TechGuru",
                userid:"u112233",
                answeredon:"2024-06-10T14:00:00Z"
            }
        ]
      }];
    const checkauth=()=>{
        if(user===null){
            alert("Login or signup to ask a question")
            navigate("/Auth")
        }
        else{
            navigate("/Askquestion")
        }
    }

  return (
    <div className="main-bar">
        <div className="main-bar-header">
            {location.pathname==="/"?(
                <h1>Top Question</h1>
            ):(
                <h1>All Questions</h1>
            )}
            <button className="ask-btn" onClick={checkauth}>Ask Questions</button>
        </div>
        <div>{questionlist===null?(
                <h1>Loading...</h1>
            ):(
                <>
                <p>{questionlist.length}questions</p>
                <Questionlist questionlist={questionlist}/>
                </>
            )
            }
        </div>
    </div>
  )
}

export default Homemainbar