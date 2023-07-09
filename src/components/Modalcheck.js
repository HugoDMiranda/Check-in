import "../styles/styles-components/Modalcheck.css";
import Axios from "axios";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { allChairs } from "../data/chairs";

function Modalcheck({ closeModalcheck, listOfPassengers }) {
  const [chairs, setChairs] = useState([]);

  useEffect(() => {
    const passengersChairs = listOfPassengers.map((passenger) => {
      return passenger.chair;
    });
    let newArr = allChairs
      .filter((element) => !passengersChairs.includes(element))
      .concat(
        passengersChairs.filter((element) => !allChairs.includes(element))
      );

    setChairs(newArr);
  }, [chairs, listOfPassengers]);

  const submit = (e) => {
    Axios.post("https://server-check-in.onrender.com/checkin", {
      name: e.name,
      email: e.email,
      number: e.number,
      chair: e.chair,
      meal: e.meal,
    }).then((response) => {
      alert("PASSENGER CREATED");
    });
  };

  const passengerSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    number: yup.number().required(),
    chair: yup.string().required(),
    meal: yup.mixed().oneOf(["menu#1", "menu#2"]).required(),
  });

  const initialValues = {
    name: "",
    email: "",
    number: "",
    chair: "",
    meal: "",
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button
          className="checkinClose"
          onClick={() => {
            closeModalcheck(false);
          }}
        >
          X
        </button>
        <h3 className="checkinText">Make your check-in</h3>
        <Formik
          initialValues={initialValues}
          onSubmit={submit}
          validationSchema={passengerSchema}
        >
          <Form className="modalForm">
            <label for="name">Name:</label>
            <Field
              autoComplete="off"
              type="name"
              placeholder="full Name"
              id="name"
              name="name"
            />
            <ErrorMessage
              name="name"
              component="span"
              className="errorMessage"
            />
            <label for="email">Email:</label>
            <Field
              autoComplete="off"
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
            <ErrorMessage
              name="email"
              component="span"
              className="errorMessage"
            />
            <label for="number">Number:</label>
            <Field
              autoComplete="off"
              type="number"
              placeholder="number..."
              id="number"
              name="number"
            />
            <ErrorMessage
              name="number"
              component="span"
              className="errorMessage"
            />
            <label for="chair">Chair:</label>
            <Field
              autoComplete="off"
              type="chair"
              placeholder="select your chair..."
              component="select"
              id="chair"
              name="chair"
            >
              {chairs.map((chair) => {
                return <option value={chair}>{chair}</option>;
              })}
            </Field>
            <ErrorMessage
              name="chair"
              component="span"
              className="errorMessage"
            />
            <label for="meal">Meal:</label>
            <Field placeholder="meal" component="select" id="meal" name="meal">
              <option value="menu#1">Menu#1</option>
              <option value="menu#2">Menu#2</option>
            </Field>
            <ErrorMessage
              name="meal"
              component="span"
              className="errorMessage"
            />
            <button>confirm check-in</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Modalcheck;
