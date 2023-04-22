import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBusStopData } from "./customFormSlice";
import classes from "./CustomForm.module.css";

const CustomForm = (props) => {
  const dispatch = useDispatch();

  const [enteredBusStopNo, setEnteredBusStopNo] = useState("");
  const [bustopIsTouched, setBustopIsTouched] = useState(false);

  const validBusStopNumber = enteredBusStopNo.trim().length === 5;
  const inValidBusStopNumber = !validBusStopNumber && bustopIsTouched;

  const onChangeHandler = (event) => {
    setEnteredBusStopNo(event.target.value);
  };
  const busStopBlurHandler = (event) => {
    setEnteredBusStopNo(event.target.value);
    setBustopIsTouched(true);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // validation
    if (enteredBusStopNo.length === 0) {
      return;
    }
    const url =
      "https://api.translink.ca/rttiapi/v1/buses?apikey=ngawszJRMjikR6QMofJq&stopNo=" +
      enteredBusStopNo;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const response = await fetch(url, options);
    const buses = await response.json();

    dispatch(updateBusStopData(buses));
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.input}>
          <label htmlFor="busStop">Enter Bus Stop Number : </label>
          <input
            id="busStop"
            type="number"
            value={enteredBusStopNo}
            onChange={onChangeHandler}
            onBlur={busStopBlurHandler}
          ></input>
          <div className={classes.demo}>Demo BusStopNo: 53987</div>
          {inValidBusStopNumber && bustopIsTouched && (
            <p>Enter Valid Bus Stop Number (no long five) </p>
          )}
        </div>
        <div className={classes.actions}>
          <button className={classes.button}>Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default CustomForm;
