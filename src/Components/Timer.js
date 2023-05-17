import React from 'react'
import { useState } from 'react';

const Timer =()=>{

  const[time , setTime] = useState();
  

    const changeToTimer =()=>{

      function currentTime() {
        let date = new Date(); 
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        let session = "AM";
      
        if(hh === 0){
            hh = 12;
        }
        if(hh > 12){
            hh = hh - 12;
            session = "PM";
         }
      
         hh = (hh < 10) ? "0" + hh : hh;
         mm = (mm < 10) ? "0" + mm : mm;
         ss = (ss < 10) ? "0" + ss : ss;
          
         let time = hh + ":" + mm + ":" + ss + " " + session;
         setTime(time)
         let t = setTimeout(function(){ currentTime() }, 1000);
        }
         currentTime();
        }
         
    return (
      <div>
        <h1 className="title">Timer and Stopwatch</h1>
        <div class="d-grid gap-2 col-6 mx-auto my-5">
        <button class="btn btn-primary bg-dark" type="button"  onClick={changeToTimer}>Show Time</button>
      </div>
      <div className="resultBox">
       <span>{time}</span>
     </div>
      </div>
    )
  }
  


export default Timer


  