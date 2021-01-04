import "./App.css";
import Chat from "./pages/Chat";
import Landing from "./pages/Landing";
import React, { useEffect, useState } from "react";
import NameContext from "./context/NameContext";
import RoomContext from "./context/RoomContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [name, setName] = useState();
  const [room, setRoom] = useState("1");
  useEffect(() => {}, []);
  return (
    <div className="App">
      <NameContext.Provider value={[name, setName]}>
        <RoomContext.Provider value={[room, setRoom]}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Landing></Landing>
              </Route>
              <Route path="/chat">
                <Chat></Chat>
              </Route>
            </Switch>
          </Router>
        </RoomContext.Provider>
      </NameContext.Provider>
    </div>
  );
}

export default App;
