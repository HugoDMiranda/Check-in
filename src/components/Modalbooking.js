import React, { useState, useMemo } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import "../styles/styles-components/Modalbooking.css";
import { useTable } from "react-table";
import Table from "./Table";

function Modalbooking({ closeModalbooking, listOfPassengers }) {
  const [passenger, setPassenger] = useState(["no passenger"]);

  const data = useMemo(() => passenger, [passenger]);
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
    ],
    []
  );

  const table = useTable({ columns, data });

  const submit = (e) => {
    setPassenger("");
    const passengerName = listOfPassengers.filter((passenger) => {
      return passenger.name.toLowerCase() === e.name.toLowerCase();
    });
    setPassenger(passengerName);
  };

  const passengerSchema = yup.object().shape({
    name: yup.string().required(),
  });

  const initialValues = {
    name: "",
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button
          className="bookingClose"
          onClick={() => {
            closeModalbooking(false);
          }}
        >
          X
        </button>
        <h3 className="bookingText">Look for your booking</h3>
        <Formik
          initialValues={initialValues}
          onSubmit={submit}
          validationSchema={passengerSchema}
        >
          <Form className="modalForm">
            <label for="name" className="name">
              name:
            </label>
            <Field
              autoComplete="off"
              type="name"
              placeholder="full Name"
              id="name"
              name="name"
              className="nameField"
            />
            <button type="submit" className="submit">
              Look
            </button>
          </Form>
        </Formik>
        {passenger[0]?.name ? (
          <Table table={table} size={"one"} />
        ) : !passenger[0] ? (
          <p>Passenger not found</p>
        ) : passenger[0] === "no passenger" ? null : null}
      </div>
    </div>
  );
}

export default Modalbooking;
