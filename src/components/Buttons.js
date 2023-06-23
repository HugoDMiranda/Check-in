import "../styles/styles-components/Buttons.css";

function Buttons({ setOpenModalcheck, setOpenModalbooking }) {
  return (
    <div className="buttons-container">
      <button
        className="checkin"
        onClick={() => {
          setOpenModalcheck(true);
        }}
      >
        Check-in
      </button>
      <button
        className="booking"
        onClick={() => {
          setOpenModalbooking(true);
        }}
      >
        Booking
      </button>
    </div>
  );
}

export default Buttons;
