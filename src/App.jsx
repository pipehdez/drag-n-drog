import { useState } from "react";
import "./App.css";

import Kanban from "./components/kamban";
import Video from "./components/Video";
import Switch from "./components/Switch";

function App() {
  const [isVideoSensor, setIsVideoSensor] = useState(false);

  const handleSwitch = () => {
    setIsVideoSensor(!isVideoSensor);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Kanban UI</h1>
      <Switch isVideoSensor={isVideoSensor} onChange={handleSwitch} />
      <div style={{ display: "flex" }}>
        <Video isVideoSensor={isVideoSensor} />
        <Kanban />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px",
    width: "100%",
  },
  title: {
    marginBottom: "20px",
  },
};
export default App;
