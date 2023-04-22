import React from "react";
import "./table.css";

const Table = ({ data = null, columns = null }) => {
  // const data = useSelector(busStopList);
  const getCaps = (str) => {
    return str.toUpperCase();
  };
  console.info("loading table", data);
  return (
    <div>
      {/* check-length validattion */}

      <table>
        <thead>
          <tr>
            {columns &&
              columns.map((head) => (
                <th>{getCaps(head.header, head.field)}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row) => (
              <tr key="TripId">
                {columns.map((col) => (
                  <td key="Direction">{row[col.field]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
