import React, { useEffect, useState } from "react";
import Style from "./Birthday.module.css";

import { Link } from "react-router-dom";

function Birthday() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("users"));
    if (existingData) {
      setData(existingData);
    }
  }, []);

  const today = new Date();
  const birthdayPeople = data.filter((item) => {
    const dateOfBirth = new Date(item.dateOfBirth);
    return (
      dateOfBirth.getMonth() == today.getMonth() &&
      dateOfBirth.getDate() == today.getDate()
    );
  });

  return (
    <>
      <div className={Style.main}>
        <h2>Wishing You Happiest birthday</h2>

        {birthdayPeople.length > 0 ? (
          <div className={Style.box2}>
            {birthdayPeople.map((item, index) => (
              <div key={index} className={Style.name}>
                It's {item.firstName} {item.lastName}'s birthday today!
              </div>
            ))}
          </div>
        ) : (
          <div className={Style.mini}>no one has bday</div>
        )}
        <Link to="/">
          <button className={Style.home}>HOME</button>
        </Link>
      </div>
    </>
  );
}
export default Birthday;
