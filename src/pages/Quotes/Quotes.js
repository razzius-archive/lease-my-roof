import React, { useState } from "react";
import "./style.css";

function Quotes() {
  const [sortBy, setSortBy] = useState("vendor");
  const criteria = [
    "vendor",
    "rating",
    "price"
  ];

  return(
    <div>
      <th>
        {criteria.map(columnName => {
          return (
            <td
              className={"column-header" + (
                sortBy === columnName
                  ? " active"
                  : ""
              )}
              onClick={() => setSortBy(columnName)}
            >
              {columnName}
            </td>
          );
        })}
      </th>
    </div>
  );
};

export default Quotes;
