import { AppHeader } from "./cmp/AppHeader";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="main-container">
      <AppHeader />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
