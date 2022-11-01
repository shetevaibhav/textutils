import React, { useEffect } from 'react'
import { useState } from 'react'
var interval=undefined;
export default function Textarea(prop) {
    const handleclik=()=>{
        let newtext=text.toUpperCase();
        settext(newtext)
    }
    function handleclick() {
    let newtext = text.toLowerCase();
    settext(newtext);
  }                     
    const handleclear=()=>{
      let newtext ='';
      settext(newtext)
    }
    const handleonchange=(event)=>{

       settext(event.target.value)
    }
    const toggleclick=()=>{
      if(mystyle.color=='white')
      {
        setmystyle(
          {
            color:'black',
            backgroundColor:'white'
          }
        )
        setbtntext("Enable DarkMode")
      }
      else{
        setmystyle({
          color:'white',
          backgroundColor:'black'
        })
        setbtntext("Enable LightMode")
      }
    }
    const [text, settext] = useState('');
    const [btntext, setbtntext] = useState('Enable DarkMode');
    const [mystyle,setmystyle]= useState(
      {
        color:'black',
        backgroundColor:'white'
      }
    )
    const [seconds, setseconds] = useState(0);
    const [minutes, setminutes] = useState(0);
    const [hour, sethour] = useState(0);
    const [started, setstarted] = useState(false);

    const start=()=> {
      interval=setInterval(()=>{
      setseconds((x)=>x+1);
      }
      ,1000)  
      setstarted(true)
    }

    if(seconds==59)
    {
      setminutes(minutes+1)
      setseconds(0)
      if(minutes==59){
        sethour(hour+1)
      }
    }

   
  const restart=()=>
  {
   setseconds(0)
   setminutes(0)
   sethour(0)
   clearInterval(interval)
   setstarted(false)
  }

  const stop=()=>
  {
    clearInterval(interval)
    setstarted(false)
  }
  return (
    <>
    <div class="container " style={mystyle}> 
        <div class="mb 3 p-4 ">
        <label for="textbox"><h1 style={mystyle}><b>{prop.heading}</b></h1></label>
        <textarea class="form-control " style={mystyle} value={text} onChange={handleonchange} id="textarea" rows="6"></textarea>
        <div class="p-2 " align="left">
          <button type="button" class="btn btn-info" onClick={handleclik}>Convert To UpperCase</button>
          <button type="button" class="btn btn-dark ml-2" onClick={handleclick}>Convert To LowerCase</button>
          <button type="button" class="btn btn-danger ml-2" onClick={handleclear}>ClearText</button>
          <button type="button" class="btn btn-light ml-2" onClick={toggleclick}>{btntext}</button>
        </div>
     </div>
  </div>
   <div className="container">
   <h1>Your Text Summary</h1>
   <p>{text.trim().split(" ").length}: Word {text.length} : Character</p>
   </div>
   <div className="container">
   <h1>Your Timer</h1>
   <span id="hr">{hour}</span>
   <span>:</span>
   <span id="min">{minutes}</span>
   <span>:</span>
   <span id="sec">{seconds}</span>
   <p><button type="button" class="btn btn-light ml-2" disabled={started} onClick={start}>Start</button><button type="button" class="btn btn-light ml-2"onClick={stop}>Stop</button><button type="button" class="btn btn-light ml-2"onClick={restart}>Reset</button></p>
   </div>
  </>
  )
}

