import React from "react";
import ClockLoader from "react-spinners/ClockLoader";
import "../styles/styles-components/Loading.css";

function Loading() {
  return (
    <>
      <ClockLoader
        color={"#0e73c6"}
        loading={true}
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <div className="loading">
        <h3 className="loading-header">Data is loading</h3>
        <p className="loading-text">
          Please wait a moment, as soon as the data is available you will be
          redirected
        </p>
      </div>
    </>
  );
}

export default Loading;
