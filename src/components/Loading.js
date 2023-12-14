import React from "react";
import ClockLoader from "react-spinners/ClockLoader";
import "../styles/styles-components/Loading.css";
import Logo from "./Logo";

function Loading() {
  return (
    <div className="loading-container">
      <Logo logoLoading={`logo-loading`} />
      <ClockLoader
        color={"#0e73c6"}
        loading={true}
        size={200}
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
    </div>
  );
}

export default Loading;
