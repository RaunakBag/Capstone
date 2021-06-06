import React from "react";

import Sports from "./Sports";



import { Tabs, Tab } from "react-bootstrap";


export default function App() {
  const [selectedPlanet, setSelectedPlanet] = React.useState([]);
  return (
    <div className="App">
      <Tabs defaultActiveKey="planet" id="uncontrolled-tab-example">
        <Tab eventKey="planet" title="Planets">
          <Sports updatePlanets={e => setSelectedPlanet([...e])} />
        </Tab>
        <Tab eventKey="list" title="Selected">
          
        </Tab>
      </Tabs>
    </div>
  );
}