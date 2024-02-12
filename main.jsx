import React from "react";
import bg from "./assets/bg.jpg";
import "./main.css";
import { useState } from "react";
export  const Main=()=>
{    
    const date=new Date().toISOString().split("T")[0];
     //const time=new Date().toTimeString().slice(0,5);
      // Calculate the current time in minutes from midnight
    // const currentTimeInMinutes = new Date().getHours() * 60 + new Date().getMinutes();

    //  Calculate the minimum time in HH:MM format
    // const minTime = Math.floor(currentTimeInMinutes / 60).toString().padStart(2, '0') + ':' + (currentTimeInMinutes % 60).toString().padStart(2, '0');
    const handleSubmit=(e)=>
    {
        
        if(name===""||dates===""||time===""||nop===0)
        {
            setValid(false);
        }
        else{
            setValid(true);
            setName("");
            setDates("");
            setTime("");
            setNop(1);
        alert("Booking Confirmed!!!");
        }
        
    }
    const [name,setName]=useState("");
    const [dates,setDates]=useState("0000-00-00");
    const [time,setTime]=useState("00:00");
    const [nop,setNop]=useState(1);
    const [valid,setValid]=useState(true);
    
    return(
        <div className="container">
            <img src={bg} className="bg"alt="bg"></img>
             <form className="form-overlay" onSubmit={handleSubmit}>
                 <h1>Table Reservation</h1>
                 <div className="field">
                  <label htmlFor="name">Name </label><br/>
                  <input type="text" id="name" 
                  onChange={(e)=>setName(e.target.value)}required></input>
                 </div>
                 <div className="field">
                  <label htmlFor="date">Date </label><br/>
                  <input type="date" id="date" min={date}
                  onChange={(e)=>setDates(e.target.value)}required></input>
                 </div>
                 <div className="field">
                  <label htmlFor="time">Time </label><br/>
                  <input type="time" id="time" 
                  onChange={(e)=>setTime(e.target.value)}required ></input>
                 </div>
                 <div className="field">
                    <label  className="num"htmlFor="number">Number of persons</label><br/>
                    <input type="number" id="number" min="1" max="30" 
                    onChange={(e)=>setNop(e.target.value)}required></input>
                 </div>
                 <div className="field">
                    <button className="button"type="submit" disabled={!valid} >Book now</button>
                 </div>
                 
             </form>
        </div>
        
    );
}