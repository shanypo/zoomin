import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AppHeader } from "./cmp/AppHeader";
import { TabNav } from "./cmp/TabNav";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="main-container">
        <AppHeader />
        <main>
          <Home />
        </main>
      </div>
    </Router>
  );
}

export default App;
