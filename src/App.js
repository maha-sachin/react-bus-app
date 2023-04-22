import React from "react";
import { useSelector } from "react-redux";
import { busStopList } from "./components/busForm/customFormSlice";

import classes from "./App.module.css";
import CustomForm from "./components/busForm/CustomForm";
import Table from "./components/table/Table";

function App() {
  const data = useSelector(busStopList);

  const columns = [
    { field: "VehicleNo", header: "BusNo" },
    { field: "Direction", header: "ArrivalTime" },
    { field: "RecordedTime", header: "WaitingTime" },
  ];
  return (
    <div className={classes.AppContainer}>
      <header className={classes.header}>
        <h2>Bus-App</h2>
        <h4>Finding Bus Details</h4>
      </header>
      <CustomForm />
      {data.length > 0 && (
        <Table class="table-left" data={data} columns={columns} />
      )}
    </div>
  );
}

export default App;
