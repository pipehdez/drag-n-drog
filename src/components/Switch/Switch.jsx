import "./switch.css";

const Switch = ({ isVideoSensor, onChange }) => {
  return (
    <div className="switch__content">
      <div className="switch">
        <label>
          <input type="checkbox" checked={isVideoSensor} onChange={onChange} />
          <span className="slider round"></span>
        </label>
      </div>
      <p>Active: {isVideoSensor ? "Video Sensor" : "Voice Sensor (In progress)"}</p>
    </div>
  );
};

export default Switch;
