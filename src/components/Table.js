import React from "react";
import "../styles/styles-components/List.css";

function Table({ table, size }) {
  return (
    <div
      className={
        size === "all"
          ? "list-container"
          : size === "one"
          ? "one-container"
          : null
      }
    >
      <table {...table.getTableProps()} className="list-table">
        <thead className="list-header">
          {table.headerGroups.map((headerGroup) => {
            return (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="list-header-row"
              >
                {headerGroup.headers.map((column) => {
                  return (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...table.getTableBodyProps()} className="list-body">
          {table.rows.map((row) => {
            table.prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="list-body-row">
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
