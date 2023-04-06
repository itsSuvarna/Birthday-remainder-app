import Style from "./Home.module.css"
import React, { useState } from "react";
import {Link} from "react-router-dom";
{/*import React from "react"

import { useState } from "react";
import {Link} from "react-router-dom";


function Home() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [date,setDate] =useState("");
  

  const storedData = localStorage.getItem("user")
  const data= JSON.parse(storedData);
  console.log(data)

  const handleSubmit = () => {
      const obj ={
        name:fname,
        lastname:lname,
        date:date,
      }
      localStorage.setItem("user",JSON.stringify(obj));

    }

  return (
    <>
      <div className={Style.maincontainer}>
        <div className={Style.container}>
          <form onSubmit={handleSubmit}>
            <h1>Birthday remainder</h1>
            <div>
              <input
                className={Style.fname}
                placeholder="firstName"
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>

            <div>
              <input
                className={Style.lname}
                placeholder="lastName"
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>

            <div>
              <input
                className={Style.date}
                placeholder="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <button className={Style.btn}   type="submit">
              submit
            </button>
          </form>
 
          <Link to="/birthday"><button>birthday page</button></Link>

        </div>
      </div>
    </>
  );
}

export default Home;*/}





function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth
    };

    const existingData = JSON.parse(localStorage.getItem("users"));
    let newData;
    if (existingData) {
      newData = [...existingData, data];
    } else {
      newData = [data];
    }

    localStorage.setItem("users", JSON.stringify(newData));
    alert("Data saved successfully!");
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
  };

  return (
    <div className={Style.maincontainer}>
    <div className={Style.container}>
      
       
      <form onSubmit={handleSubmit}>
      <h1>Birthday remainder app</h1>
       <h2>Register here...</h2>
      <div>
        <input
           className={Style.fname}
          type="text"
          placeholder="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        </div>
         <div>
        <input
           className={Style.lname}
          type="text"
          placeholder="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        </div>
       <div>
        <input
         className={Style.date}
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />
        </div>
        <button className={Style.btn} type="submit">Save</button>
      </form>

      <Link to="/birthday"><button className={Style.btns}>show birthday persons list</button></Link>
    </div>
    </div>
  );
}
export default Home;
