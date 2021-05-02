import "./styles.css";
import React, { useState } from "react";
export default function App() {
  var month, date;
  var [dob, setdob] = useState("");
  var [error, seterror] = useState("");
  var [result, setresult] = useState("");

  function todate(dob) {
    date = dob.slice(0, 2);
    month = dob.slice(3, 5);
    if (month == 2 && date > 29) {
      error = "February doesn't have more than 28 days right?";
    } else if (month > 12 || date > 31) {
      error = "The date you entered is not possible. Kindly check!";
    }
  }

  function inputHandler(event) {
    dob = event.target.value;
    setdob(dob);
  }

  todate(dob);

  function prime(date) {
    var count = 1;
    for (var i = 2; i <= date; i++) {
      if (date % i === 0) {
        count++;
      }
    }
    if (count === 2) {
      result = "Yayy!! Your birthday date was a prime number";
    } else if (count !== 2) {
      result = "Your birthday date is not a prime number";
    }
  }

  function clickHandler() {
    prime(date);
    seterror(error);
    setresult(result);
  }

  return (
    <div className="App">
      <h1>Welcome to Prime Number App</h1>
      <h2>See the magic!</h2>
      <hr />
      <div style={{ margin: "2rem" }}>
        <span style={{ fontWeight: "bolder" }}>
          Enter date and month(in dd/mm) :{" "}
        </span>
        <input style={{ margin: "1rem" }} onChange={inputHandler} />
        <div>
          <button
            style={{ margin: "2rem", padding: "0.5rem", fontWeight: "bold" }}
            onClick={clickHandler}
          >
            Check Out!!{" "}
          </button>
        </div>
        <h3> {error} </h3>
        <h3> {result} </h3>
      </div>
    </div>
  );
}
