const Video = ({ isVideoSensor }) => {
  const styleVideo = {
    display: isVideoSensor ? "block" : "none",
  };

  return (
    <div className="video">
      <div className="video">
        <div className="output" style={styleVideo}>
          <video width="500" height="320" id="videoInput" />
        </div>
        <div className="canva" style={styleVideo}>
          <canvas width="500" height="320" id="canvasOutput" />
        </div>
      </div>
    </div>
  );
};

export default Video;
