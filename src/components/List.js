import React, { useMemo } from "react";
import { useTable } from "react-table";
import "../styles/styles-components/List.css";
import Table from "./Table";

function List({ listOfPassengers }) {
  const data = useMemo(() => listOfPassengers, [listOfPassengers]);
  const columns = useMemo(
    () => [
      {
        Header: "# Chair",
        accessor: "chair",
      },
      {
        Header: "Full name",
        accessor: "name",
      },
      {
        Header: "Meal",
        accessor: "meal",
      },
      // {
      //   Header: "On board",
      //   accessor: "chair",
      // },
    ],
    []
  );

  const table = useTable({ columns, data });

  return <Table table={table} size={"all"} />;
}

export default List;
